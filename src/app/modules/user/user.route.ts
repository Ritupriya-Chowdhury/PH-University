import express from 'express';
import { UserControllers } from './user.controller';
import  { studentZodSchema} from '../student/student.validation'
import validateRequest from '../../middlewares/validateREquest';

const router = express.Router();

router.post(
    '/create-user',
    validateRequest( studentZodSchema), 
    UserControllers.createStudent
);


export const UserRoutes=router;