import { z } from 'zod';

// Define the UserName schema
const userNameZodSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    }),
  middleName: z.string(),
  lastName: z.string(),
});

const  guardianZodSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});
  
  // Define the LocalGuardian schema
  const localGuardianZodSchema = z.object({
    name: z.string(),
    occupation: z.string(),
    contactNo: z.string(),
    address: z.string(),
  });
  
  // Define the Student schema
  export const studentZodSchema =z.object({
    body: z.object({
      password: z.string().max(20),
      student: z.object({
        name: userNameZodSchema,
        gender: z.enum(['male', 'female', 'other']),
        dateOfBirth: z.string().optional(),
        email: z.string().email(),
        contactNo: z.string(),
        emergencyContactNo: z.string(),
        bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
        presentAddress: z.string(),
        permanentAddress: z.string(),
        guardian:  guardianZodSchema,
        localGuardian: localGuardianZodSchema,
        admissionSemester: z.string(),
        profileImg: z.string(),
      }),
    }),
  });
  
  export const studentValidations={ 
    studentZodSchema,
  };