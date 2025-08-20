'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof contactFormSchema>) {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  const { name, email, message } = parsed.data;

  // IMPORTANT: You'll need to configure your email provider here.
  // This example uses a test account from ethereal.email.
  // For production, use a real SMTP service like SendGrid, Resend, or your own SMTP server.
  // Store credentials in environment variables, not in the code.
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.ethereal.email',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: (process.env.SMTP_SECURE || 'false') === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || 'nettie.sauer36@ethereal.email', // generated ethereal user
      pass: process.env.SMTP_PASS || 'Tz3n2p2B6Xk2yX6kQ2', // generated ethereal password
    },
  });
  
  const mailOptions = {
    from: `"Tex Method Contact Form" <${process.env.SMTP_USER || 'nettie.sauer36@ethereal.email'}>`, // sender address
    to: 'info@texmethod.com', // list of receivers
    replyTo: email,
    subject: `New message from ${name}`, // Subject line
    text: message, // plain text body
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `, // html body
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    // You can see the preview URL if you're using an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    return { success: true, message: 'Your message has been sent!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'There was a problem sending your message. Please try again later.' };
  }
}
