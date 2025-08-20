'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

const OAuth2 = google.auth.OAuth2;

export async function submitContactForm(values: z.infer<typeof contactFormSchema>) {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  const { name, email, message } = parsed.data;

  // For this to work, you need to set up OAuth2 credentials in your Google Cloud project
  // and add the following environment variables:
  // GMAIL_CLIENT_ID
  // GMAIL_CLIENT_SECRET
  // GMAIL_REFRESH_TOKEN
  // OAUTH_PLAYGROUND_URL (usually https://developers.google.com/oauthplayground)
  // GMAIL_USER (the email address you're sending from)
  
  const oauth2Client = new OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    process.env.OAUTH_PLAYGROUND_URL
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
  });

  try {
    const accessToken = await oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: accessToken.token as string,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: 'roni.dboy@gmail.com',
      replyTo: email,
      subject: `New message from ${name} via Tex Method`,
      text: message,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return { success: true, message: 'Your message has been sent!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'There was a problem sending your message. Please try again later.' };
  }
}
