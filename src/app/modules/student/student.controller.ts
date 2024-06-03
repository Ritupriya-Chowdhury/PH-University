import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};


// code for get students
const getAllStudents = async (req: Request, res: Response) => {
  try {
     
      const result = await StudentServices.getAllStudentsFromDB();
      res.status(200).json({
          success: true,
          message: "Students fetched successfully!",
          data: result,
      });
  } catch (err) {
      console.error(err);
      res.status(500).json({
          success: false,
          message: "Failed to fetch students.",
         
      });
  }
};



// code for get one student
const getOneStudent = async (req: Request, res: Response) => {
  try {
      const {id}=req.params
     
     
      const result = await StudentServices.getSingleStudentFromDB(id);
      res.status(200).json({
          success: true,
          message: "Students fetched successfully!",
          data: result,
      });
  } catch (err) {
      console.error(err);
      res.status(500).json({
          success: false,
          message: "Failed to fetch students.",
         
      });
  }
};



// code for delete product
const deleteStudent = async (req: Request, res: Response) => {
  try {
      const { id } = req.params;
      await StudentServices.deleteStudentFromDB(id);
      res.status(200).json({
          success: true,
          message: 'Student deleted successfully!',
      });
  } catch (error) {
      console.error(error);
      res.status(400).json({
          success: false,
          message:'Failed to delete Student.',
      });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getOneStudent,
  deleteStudent
};
