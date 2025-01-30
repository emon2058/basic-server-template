import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { AcademicFacultyController } from "./academicFaculty.controller";
import { academicFacultyValidation } from "./academicFaculty.validation";

const router = Router();

router.post('/create-academic-faculty',validateRequest(academicFacultyValidation.createAcademicFacultyValidationSchema),AcademicFacultyController.createAcademicFaculty)

router.get('/:facultyId',AcademicFacultyController.getSingleAcademicFaculty);

router.patch('/:facultyId',validateRequest(academicFacultyValidation.updateAcademicFacultyValidationSchema),AcademicFacultyController.updateAcademicFaculty)

router.get('/',AcademicFacultyController.getAllAcademicFaculties);

export const AcademicFacultyRoute=router;