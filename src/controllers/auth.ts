import { Request } from "express";
import prisma from '../config/prisma-client';
import { HttpResponse } from '../protocols/http';
import { hashPassword } from '../utils/auth';

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