import { z } from 'zod';

// Define the Zod schema according to the TUser interface
const userValidationSchema = z.object({

  password: z.
  string({
    
    invalid_type_error: "Password must be a string",
  })
  .max(20,{message:"Password can not more than 20 characters"})
  .optional(),
  
});

// Export the schema
export const UserValidation={
    userValidationSchema  
} ;
