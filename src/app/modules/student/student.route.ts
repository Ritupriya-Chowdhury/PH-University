import express from 'express';
import { StudentControllers } from './student.controller';




const router = express.Router();

router.post('/create-student', StudentControllers.createStudent);


// all get students route
router.get('/students', StudentControllers.getAllStudents);


//get single route
router.get('/students/:studentId', StudentControllers. getOneStudent);


//delete student route
router.delete('/products/:id', StudentControllers.deleteStudent);

export const StudentRoutes=router;