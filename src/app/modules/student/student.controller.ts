import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

// code for get students
const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
try {
   
    const result = await StudentServices.getAllStudentsFromDB();
    sendResponse(res,{
      statusCode: httpStatus.OK,
      success: true,
      message:'Student is created successfully',
      data:result


     });

  } catch (err: any) {
    next(err)
   }
};

// code for get one student
const getOneStudent = async (
  req: Request, 
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(id);
    sendResponse(res,{
      statusCode: httpStatus.OK,
      success: true,
      message:'Student is created successfully',
      data:result


     });

  } catch (err: any) {
    next(err)
   }
};

// code for delete product
const deleteStudent = async (
  req: Request,
  res: Response,
 next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await StudentServices.deleteStudentFromDB(id);
    sendResponse(res,{
      statusCode: httpStatus.OK,
      success: true,
      message:'Student is created successfully',
      data:result


     });

  } catch (err: any) {
   next(err)
  }
};

export const StudentControllers = {
  getAllStudents,
  getOneStudent,
  deleteStudent,
};
