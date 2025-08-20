'use server';

import { z } from 'zod';
import { format } from 'date-fns';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not exceed 500 characters."
  }),
});

type Message = {
    name: string;
    email: string;
    phone: string;
    message: string;
    date: string;
}

// In a real application, you would save this to a database.
// For this demo, we'll store messages in a simple in-memory array on the server.
const messages: Message[] = [];

export async function submitContactForm(values: z.infer<typeof contactFormSchema>) {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: 'Invalid form data.' };
  }
  
  const { name, email, phone, message } = parsed.data;

  try {
    const newMessage: Message = {
        name,
        email,
        phone,
        message,
        date: format(new Date(), 'yyyy-MM-dd HH:mm'),
    };
    
    messages.unshift(newMessage);

    // For local development, it's easiest to use a service like Ethereal.
    // Create a test account: https://ethereal.email/create
    // And set the credentials in a .env file (see .env.example)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // generated ethereal user
        pass: process.env.SMTP_PASS, // generated ethereal password
      },
    });

    const mailOptions = {
      from: '"Tex Method Website" <noreply@texmethod.com>',
      to: "roni.dboy@gmail.com",
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Message from your Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    return { success: true, message: 'Your message has been received!' };

  } catch (error) {
    console.error('Error processing form:', error);
    return { success: false, message: 'There was a problem submitting your message. Please try again later.' };
  }
}

export async function getMessages(): Promise<Message[]> {
    // Returns the stored messages.
    return messages;
}
