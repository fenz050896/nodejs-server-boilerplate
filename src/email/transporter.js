import nodemailer from 'nodemailer';
import pug from 'pug';
import path from 'path';
import {
  app,
} from '../configs';

export default async () => {
  try {
    const transportOptions = {
      service: app.EMAIL_SERVICE,
      auth: {
        user: app.EMAIL_USER,
        pass: app.EMAIL_USER_PASSWORD,
      },
    };
    const transporter = nodemailer.createTransport(
      transportOptions,
    );
    const compiledFunction = pug.compileFile(path.resolve(__dirname, 'email.pug'));
    const compiledFile = compiledFunction();
    const dataSendMail = {
      from: '"Sender Name" <sender_email@email.com>',
      to: 'to@email.com',
      subject: 'Email Subject',
      html: compiledFile,
    };

    await transporter.sendMail(dataSendMail);
    return {
      success: 1,
      message: 'Sent!',
    };
  } catch (err) {
    return {
      success: 0,
      message: err.message,
    };
  }
};
