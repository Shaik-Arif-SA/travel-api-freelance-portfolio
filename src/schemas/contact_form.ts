import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  company: z.string().trim().max(120).optional(),
  website: z.string().trim().max(200).optional(),
  service: z.string().min(1, 'Please select a service.'),
  budget: z.string().optional(),
  technology: z.string().trim().max(120).optional(),
  description: z
    .string()
    .trim()
    .min(30, 'Please share at least 30 characters about your requirements.')
    .max(5000, 'Please keep your requirements under 5,000 characters.'),
  website_hp: z.string().max(0, 'Spam detected.').optional()
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
