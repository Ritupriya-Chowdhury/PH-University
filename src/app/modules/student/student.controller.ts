import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';




// code for get students
const getAllStudents =catchAsync (async (req,res,next) => {

   
    const result = await StudentServices.getAllStudentsFromDB();
    sendResponse(res,{
      statusCode: httpStatus.OK,
      success: true,
      message:'Student is retrieved successfully',
      data:result


     });

    
});

// code for get one student
const getOneStudent =catchAsync (async (req,res,next) => {
  const { id } = req.params;
   
  const result = await StudentServices. getSingleStudentFromDB(id);
  sendResponse(res,{
    statusCode: httpStatus.OK,
    success: true,
    message:'Student is retrieved successfully',
    data:result


   });
   

  
});
// code for delete product
const updateStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const { student } = req.body;
  const result = await StudentServices.updateStudentIntoDB(studentId, student);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is updated successfully',
    data: result,
  });
});



// code for delete product
const deleteStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.deleteStudentFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is deleted successfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getOneStudent,
  deleteStudent,
  updateStudent
};
