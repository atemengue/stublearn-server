import { Request } from "express";
import jwt from 'jsonwebtoken';
import { nanoid } from "nanoid";
import prisma from '../config/prisma-client';
import { HttpResponse } from '../protocols/http';
import { comparePassword, hashPassword } from '../utils/auth';
import { forgotPasswordParams, mailInit, sendEmail } from './../utils/mail';
// import ses from "../config/ses-client"; // Assuming you have an SES client configured

export const register = async (req: Request): Promise<HttpResponse> => {
  try {
    // console.log(req.body);
    const { name, email, password } = req.body;
    // validation
    if (!name) return  {
      status: 400,
      body: "Name is required",
    }
    // res.status(400).send("Name is required");

    if (!password || password.length < 6) {
      return {
        status: 400,
        body: "Password is required and should be min 6 characters long",
      }
    }

    let userExist = await prisma.user.findUnique({where: { email }});
    if (userExist) return {
      status: 400,
      body: "Email is taken",
    }
    // res.status(400).send("Email is taken");
    const hashedPassword = await hashPassword(password);

    // register
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
     console.log("saved user", user);
    return  {
      status: 201,
      body: 'ok',
    }
    // res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return  {
      status: 400,
      body: "Error. Try again.",  
    }
  }
};

// export const registerActivate = async (req: Request): Promise<HttpResponse> => {
//   const { jwtLink } = req.body;

//   if (!jwtLink) return { status: 400, body: "Unauthorized" };

//   jwt.verify(
//     jwtLink, '',
//     async function (err: any, decoded) {
//       if (err) return { status: 400, body: "Expired link. Register again" };

//       const { name, email, password } = jwt.decode(jwtLink);

//       // hash password
//       const hashedPassword = await hashPassword(password);

//       try {
//         // register
//         await prisma.user.create({
//           data: {
//             name,
//             email,
//             password: hashedPassword
//           }
//         });
//         return {
//           status: 200,
//           body: 'ok'
//         }
//       } catch (err) {
//         console.log(err);
//         return {
//           status: 400,
//           body: "Register error. Try again."
//         }
//       }
//     }
//   );
// };

export const login = async (req: Request): Promise<HttpResponse> => {
  try {
    const { email, password } = req.body;

    // Check if our database has a user with that email
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return  {
        status: 400,
        body: {
          message: 'No user found'
        }
      }      
    }
    // Check password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return  {
        status: 400,
        body: {
          message: "Wrong password"
        }
      }  
    }

    // Create signed token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "7d",
    });

    // Exclude hashed password from the response
    const { password: _, ...userWithoutPassword } = user;

    // Set token in cookie
    return {
      status: 200,
      body: {
        user: userWithoutPassword,
        token
      }
    }

  } catch (err) {
    console.error(err);
    return {
      status: 400,
      body: {
        message: "Error. Try again."
      }
    }
  }
};

export const currentUser = async (req: Request): Promise<HttpResponse> => {
  // change with id of middleware
 const id = 1;
  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
      select: { password: false }, // Exclude password from the result
    });

    if (!user) {
      return {
        status: 404,
        body: {
          message: "User not found",
        },
      };
    }

    return {
      status: 200,
      body: {
        ok: true,
        user,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      status: 500,
      body: {
        message: "Internal server error",
      },
    };
  }
};


export const forgotPassword = async (req: Request): Promise<HttpResponse> => {
  try {
    const { email } = req.body;

    // Generate unique code
    const shortCode = nanoid(6).toUpperCase();

    // Save shortcode as passwordResetCode in the database
    const user = await prisma.user.update({
      where: { email },
      data: { passwordResetCode: shortCode },
    });

    if (!user) {
      return {
        status: 400,
        body: "User not found",
      };
    }

    // Prepare email parameters
    const params = forgotPasswordParams(email, shortCode);
    await mailInit();

    // Send email
    try {
      // const emailSent = await ses.sendEmail(params).promise();
      await sendEmail({
        subject : params.Message.Subject.Data,
        to: params.Destination.ToAddresses[0],
        from: params.Source || "",
        html: params.Message.Body

      });
      return {
        status: 200,
        body: { ok: true },
      };
    } catch (err) {
      console.error(err);
      return {
        status: 500,
        body: "Error sending email",
      };
    }
  } catch (err) {
    console.error(err);
    return {
      status: 500,
      body: "Internal server error",
    };
  }
};