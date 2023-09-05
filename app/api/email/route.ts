import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: Request) {
  const { email, tel, message } = await request.json();

  let transport = nodemailer.createTransport({
    service: 'gmail',
    tls: {
      rejectUnauthorized: false
    },
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message from ${tel} (${email})`,
    text: message,
  };


  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err: any, info: any) {
        console.log({ err })
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    sendMailPromise();

    return NextResponse.json({ message: 'Your Email Has Been sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

