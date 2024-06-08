import { z } from 'zod';

// Define the UserName schema
const userNameZodSchema = z.object({
  firstName: z.string().min(1)
  .max(20)
  .refine((value) => /^[A-Z]/.test(value), {
    message: 'First Name must start with a capital letter',
  }),
  middleName: z.string().optional(),
  lastName: z.string()
    .min(1, { message: 'Last Name is required' })
    .max(20, { message: 'Name cannot be more than 20 characters' })
});

const guardianZodSchema = z.object({
    fatherName: z.string().min(1, { message: 'Father Name is required' }),
    fatherOccupation: z.string().min(1, { message: 'Father occupation is required' }),
    fatherContactNo: z.string().min(1, { message: 'Father Contact No is required' }),
    motherName: z.string().min(1, { message: 'Mother Name is required' }),
    motherOccupation: z.string().min(1, { message: 'Mother occupation is required' }),
    motherContactNo: z.string().min(1, { message: 'Mother Contact No is required' })
  });
  
  // Define the LocalGuardian schema
  const localGuardianZodSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    occupation: z.string().min(1, { message: 'Occupation is required' }),
    contactNo: z.string().min(1, { message: 'Contact number is required' }),
    address: z.string().min(1, { message: 'Address is required' })
  });
  
  // Define the Student schema
  const studentZodSchema = z.object({
    id: z.string().min(1, { message: 'ID is required' }),
    password: z.string()
      .min(1, { message: 'Password is required' })
      .max(20, { message: 'Password cannot be more than 20 characters' }),
    name: userNameZodSchema,
    gender: z.enum(['male', 'female', 'other'], { message: '{VALUE} is not a valid gender' }),
    dateOfBirth: z.string().optional(),
    email: z.string().email({ message: 'Invalid email address' }),
    contactNo: z.string().min(1, { message: 'Contact number is required' }),
    emergencyContactNo: z.string().min(1, { message: 'Emergency contact number is required' }),
    bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
    presentAddress: z.string().min(1, { message: 'Present address is required' }),
    permanentAddress: z.string().min(1, { message: 'Permanent address is required' }),
    guardian: guardianZodSchema,
    localGuardian: localGuardianZodSchema,
    profileImg: z.string().optional(),
    isActive: z.enum(['active', 'blocked'], { message: '{VALUE} is not a valid status' }),
    isDeleted: z.boolean().default(false)
  });
  
  export { studentZodSchema };