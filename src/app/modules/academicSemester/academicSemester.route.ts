import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidations } from './academicSemester.validation';




const router = express.Router();

router.post(
    '/create-academic-semester',
    validateRequest(
        AcademicSemesterValidations.createAcademicSemesterValidationSchema
    ),
    AcademicSemesterControllers.createAcademicSemester
 );


// all get students route
router.get('/', AcademicSemesterControllers.getAllAcademicSemesters);

router.get(
    '/:_id',
    AcademicSemesterControllers.getSingleAcademicSemester,
  );
  
  router.patch(
    '/:_id',
    validateRequest(
      AcademicSemesterValidations.updateAcademicSemesterValidationSchema,
    ),
    AcademicSemesterControllers.updateAcademicSemester,
  );



export const AcademicSemesterRoutes=router;