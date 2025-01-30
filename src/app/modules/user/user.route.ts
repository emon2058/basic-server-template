import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';
import { studentsValidation } from '../students/students.validation';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

// call controller function
router.post(
  '/create-student',
  validateRequest(studentsValidation.createStudentValidationSchema),
  UserController.createStudent,
);

export const UserRouter = router;
