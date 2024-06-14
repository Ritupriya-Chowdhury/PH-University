import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { AcademicDepartmentServices } from "./academicDepartment.service";


const createAcademicDepartment = catchAsync(async (req, res, next) => {

    const result = await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department is created successfully',
      data: result,
    });
 
});

const getAllAcademicDepartments = catchAsync(async (req, res, next) => {
 
    const result = await AcademicDepartmentServices.getAllAcademicDepartmentsFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Departments are retrieved successfully',
      data: result,
    });
 
});

const getSingleAcademicDepartment = catchAsync(async (req, res, next) => {
 
    const { id } = req.params;

    const result = await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department is retrieved successfully',
      data: result,
    });
  
});

const updateAcademicDepartment = catchAsync(async (req, res, next) => {
 
    const { id } = req.params;
    const result = await AcademicDepartmentServices.updateAcademicDepartmentIntoDB(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department is update successfully',
      data: result,
    });
 
});

export const AcademicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
};
