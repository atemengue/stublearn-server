
import nodemailer from "nodemailer";

let mail : any;

export const completeRegistrationParams = (email : string, jwtLink: string) => {
  return {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
                <html>
                    <h1>Complete Registration</h1>
                    <p>Click on the link below to complete registration:</p>
                    <a href=${process.env.CLIENT_URL}/register/${jwtLink}>${process.env.CLIENT_URL}/register/${jwtLink}</a>
                    <hr />
                    <i>Please do not reply to this email</i> | <a href="https://twitter.com/CodeContinue?ref_src=twsrc%5Etfw">Follow us on Twitter</a>
                    <br />
                    <i>Team CodeContinue</i>
                </html>
            `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Complete Registration",
      },
    },
  };
};

export const forgotPasswordParams = (email: string, shortCode: string) => {
  return {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
                <html>
                    <h1>Reset Password</h1>
                    <p>Use this code to reset your password</p>
                    <h2 style="color:red;">${shortCode}</h2>
                    <hr />
                    <i>Please do not reply to this email</i> | <a href="https://twitter.com/CodeContinue?ref_src=twsrc%5Etfw">Follow us on Twitter</a>
                    <br />
                    <i>Team CodeContinue</i>
                </html>
            `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Reset Password",
      },
    },
  };
};

export const supportEmailParams = (url: string, name : string, email: string, message: string) => {
  return {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: [process.env.EMAIL_TO],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
                <html>
                    <h1>Help & Support request</h1>
                    <p>Name: ${name}</p>
                    <p>Email: ${email}</p>
                    <p>Related course: <a href=${url}>${url}</a></p>
                    <hr />
                    <div>${message}</div>
                    <hr />
                    <i>Please do not reply to this email</i> | <a href="https://twitter.com/CodeContinue?ref_src=twsrc%5Etfw">Follow us on Twitter</a>
                    <br />
                    <i>Team CodeContinue</i>
                </html>
            `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Support Email",
      },
    },
  };
};

export const enrollIssueResolved = (name: string, email: string) => {
  return {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
                <html>
                    <h1>Issue Resolved</h1>
                    <p>Hi ${name},</p>
                    <p>We are happy to inform you that we have resolved your enrollment issue. Please login to your <a href=${
                      process.env.CLIENT_URL + "/user"
                    }>Dashboard</a> to access the course.</p>
                    <p>If your issue has been resolved, please "Mark it as resolved" in the <a href=${
                      process.env.CLIENT_URL + "/user/support"
                    }>Help & Support</a> page.</p>
                    <hr />
                    <i>Please do not reply to this email</i> | <a href="https://twitter.com/CodeContinue?ref_src=twsrc%5Etfw">Follow us on Twitter</a>
                    <br />
                    <i>Team CodeContinue</i>
                </html>
            `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Support Email (resolved)",
      },
    },
  };
};

interface Iemail {
  from: string,
  to: string,
  subject: string,
  html: any
}

export async function sendEmail({
from = "scott@leveluptuts.com",
  to = "scott@leveluptuts.com",
  subject,
  html,
} :  Iemail) {
  try {
    const info = await mail.sendMail({
      from,
      to,
      subject,
      html,
    })
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
    console.log("info", info)
  } catch (e) {
    console.error(e)
  }
}

export async function mailInit() {
  let testAccount = await nodemailer.createTestAccount()
  mail = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  })
}