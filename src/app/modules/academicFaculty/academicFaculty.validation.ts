import { z } from 'zod';

// Define the Zod schema according to the TUser interface
const createAcademicFacultyValidationSchema = z.object({
 body:z.object({
    name: z
    .string({
      invalid_type_error: 'Academic faculty must be a string',
    }),
  }),
    
});

const updateAcademicFacultyValidationSchema = z.object({
  body:z.object({
    name: z
    .string({
      invalid_type_error: 'Academic faculty must be a string',
    }),
  }),
    
});

// Export the schema
export const AcademicFacultyValidation = {
  createAcademicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema 
};
