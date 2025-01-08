import { z } from 'zod';

// Guardian schema
const guardianValidationSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(100, { message: 'Name is too long' }), // Adjust max length if needed
  address: z
    .string()
    .min(1, { message: 'Address is required' })
    .max(255, { message: 'Address is too long' }),
  contactNo: z.string().min(10, {
    message: 'Contact number should be at least 10 digits',
  }), // 10-digit phone number validation
});

// Students schema
const studentsValidationSchema = z.object({
  id: z.string().min(1, { message: 'ID is required' }),
  user: z.string().uuid({ message: 'Invalid user id format' }),
  name: z.string().min(1).max(20),
  email: z.string().email({ message: 'Invalid email format' }),
  gender: z.enum(['male', 'female', 'others'], {
    message: 'Gender must be male, female, or others',
  }),
  blood: z
    .enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'], {
      message: 'Invalid blood type',
    })
    .optional(),
  // age: z.number().min(5, { message: 'below 5 years not admitted' }),
  guardian: guardianValidationSchema, // Include the Guardian schema for validation
  isDeleted: z.boolean(),
});

export default studentsValidationSchema;
