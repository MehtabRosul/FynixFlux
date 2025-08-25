'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().email('Invalid email address.'),
  subject: z.string().min(1, 'Subject is required.'),
  message: z.string().min(1, 'Message is required.'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export async function sendEmail(formData: ContactFormData) {
  const parsedData = contactFormSchema.safeParse(formData);

  if (!parsedData.success) {
    throw new Error('Invalid form data.');
  }

  const { name, email, subject, message } = parsedData.data;

  const to = 'mehtabrosul10@gmail.com';
  const from = 'ForgeFlow Contact Form <noreply@forgeflow.pilot>';

  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { width: 90%; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .header { font-size: 24px; font-weight: bold; margin-bottom: 20px; color: #5A48E3; }
            .content { margin-bottom: 20px; }
            .content p { margin: 0 0 10px; }
            .footer { font-size: 12px; color: #777; text-align: center; }
            .label { font-weight: bold; color: #555; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">New Contact Form Submission</div>
            <div class="content">
                <p><span class="label">From:</span> ${name}</p>
                <p><span class="label">Email:</span> <a href="mailto:${email}">${email}</a></p>
                <p><span class="label">Subject:</span> ${subject}</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <div>
                    <p class="label">Message:</p>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                </div>
            </div>
            <div class="footer">
                <p>This email was sent from the ForgeFlow Pilot contact form.</p>
            </div>
        </div>
    </body>
    </html>
  `;

  // In a real application, you would use an email service like Resend, SendGrid, or Nodemailer here.
  // For this prototype, we'll just log the email to the console to simulate sending.
  console.log('--- Sending Email ---');
  console.log(`To: ${to}`);
  console.log(`From: ${from}`);
  console.log(`Subject: [ForgeFlow Contact] - ${subject}`);
  console.log('--- HTML Body ---');
  console.log(emailHtml);
  console.log('--- Email Sending Simulation Complete ---');

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: 'Email prepared successfully.' };
}
