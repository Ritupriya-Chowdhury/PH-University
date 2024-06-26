import express from 'express';
import { StudentControllers } from './student.controller';




const router = express.Router();

router.get('/:id', StudentControllers. getOneStudent);

router.patch('/:id', StudentControllers.updateStudent);

router.delete('/:id', StudentControllers.deleteStudent);

router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;