import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { AcademicFacultyServices } from "./academicFaculty.service";


const createAcademicFaculty = catchAsync(async (req, res, next) => {

    const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic faculty is created successfully',
      data: result,
    });
 
});

const getAllAcademicFaculties = catchAsync(async (req, res, next) => {
 
    const result = await AcademicFacultyServices.getAllAcademicFacultiesFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic faculties are retrieved successfully',
      data: result,
    });
 
});

const getSingleAcademicFaculty = catchAsync(async (req, res, next) => {
 
    const { id } = req.params;

    const result = await AcademicFacultyServices.getSingleAcademicFacultyFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic faculty is retrieved successfully',
      data: result,
    });
  
});

const updateAcademicFaculty = catchAsync(async (req, res, next) => {
 
    const { id } = req.params;
    const result = await AcademicFacultyServices.updateAcademicFacultyIntoDB(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic faculty is update successfully',
      data: result,
    });
 
});

export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
