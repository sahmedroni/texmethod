'use server';

import { z } from 'zod';
import { format } from 'date-fns';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10).max(500),
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
    // Instead of sending an email, we log it and store it in-memory.
    const newMessage: Message = {
        name,
        email,
        phone,
        message,
        date: format(new Date(), 'yyyy-MM-dd HH:mm'),
    };
    
    console.log('New Contact Form Submission:', newMessage);
    messages.unshift(newMessage); // Add to the beginning of the array

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
