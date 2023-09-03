import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {},
});

const mailOptions = {
  from: 'mail@gmail.com',
  to: 'abdalla.mezo@gmail.com',
  subject: 'test mail',
  text: 'test mail',
};

export async function POST(req: NextRequest) {
  const { name, email, message } = await req?.json();

  mailOptions.text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      console.log({ error });
      return NextResponse.error();
    } else {
      console.log('Email sent: ' + info.response);
      return NextResponse.next();
    }
  });
}
