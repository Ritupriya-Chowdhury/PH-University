import express from 'express';
import { StudentControllers } from './student.controller';




const router = express.Router();

// router.post('/create-student', StudentControllers.createStudent);


// all get students route
router.get('/', StudentControllers.getAllStudents);


//get single route
router.get('/:id', StudentControllers. getOneStudent);


//delete student route
router.delete('/:id', StudentControllers.deleteStudent);

export const StudentRoutes=router;