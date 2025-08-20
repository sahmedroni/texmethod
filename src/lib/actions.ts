'use server';

import { z } from 'zod';

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

  // Here you would typically:
  // 1. Save the data to a database (e.g., Firestore)
  //    const { name, email, message } = parsed.data;
  //    await db.collection('inquiries').add({ name, email, message, createdAt: new Date() });
  //
  // 2. Send an email notification (e.g., using SendGrid or Nodemailer)
  //    await sendEmail({ to: 'admin@texmethod.com', subject: 'New Inquiry', text: `...` });
  
  console.log('Form submitted successfully:', parsed.data);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For this example, we'll just return a success message.
  return { success: true, message: 'Your message has been sent!' };
}
