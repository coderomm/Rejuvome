'use server'

import { z } from 'zod'

const contactSchema = z.object({
  user_name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  contact_number: z.string().min(1, 'Phone number is required').max(20, 'Phone number too long'),
  user_email: z.string().email('Valid email is required').max(100, 'Email too long'),
  message: z.string().min(1, 'Message is required').max(1000, 'Message too long'),
})

export type ContactFormState = {
  success: boolean
  message: string
  errors?: {
    user_name?: string[]
    contact_number?: string[]
    user_email?: string[]
    message?: string[]
  }
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Validate form data
  const validatedFields = contactSchema.safeParse({
    user_name: formData.get('user_name'),
    contact_number: formData.get('contact_number'),
    user_email: formData.get('user_email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Please fix the form errors below.',
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { user_name, contact_number, user_email, message } = validatedFields.data

  try {
    // Option 1: Using EmailJS server-side (requires emailjs-com package)
    // const emailjs = require('@emailjs/nodejs')
    // 
    // await emailjs.send(
    //   process.env.EMAILJS_SERVICE_ID!,
    //   process.env.EMAILJS_TEMPLATE_ID!,
    //   {
    //     user_name,
    //     user_email,
    //     contact_number,
    //     message,
    //   },
    //   {
    //     publicKey: process.env.EMAILJS_PUBLIC_KEY!,
    //     privateKey: process.env.EMAILJS_PRIVATE_KEY!,
    //   }
    // )

    // Option 2: Using Resend (recommended)
    const { Resend } = require('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'contact@rejuvome.com',
      to: ['smita@rejuvome.com', 'darshit@rejuvome.com'],
      subject: `New Contact Form Submission from ${user_name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Phone:</strong> ${contact_number}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    // Option 3: Using Nodemailer
    // const nodemailer = require('nodemailer')
    // 
    // const transporter = nodemailer.createTransporter({
    //   host: process.env.SMTP_HOST,
    //   port: 587,
    //   secure: false,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // })
    // 
    // await transporter.sendMail({
    //   from: process.env.SMTP_FROM,
    //   to: 'smita@rejuvome.com, darshit@rejuvome.com',
    //   subject: `New Contact Form Submission from ${user_name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${user_name}</p>
    //     <p><strong>Email:</strong> ${user_email}</p>
    //     <p><strong>Phone:</strong> ${contact_number}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //   `,
    // })

    // For demo purposes - replace with actual email sending logic above
    console.log('Contact form submission:', { user_name, user_email, contact_number, message })
    
    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return {
      success: true,
      message: 'Thank you for your message! We\'ll get back to you soon.',
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return {
      success: false,
      message: 'Failed to send message. Please try again or contact us directly.',
    }
  }
}