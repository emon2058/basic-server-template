import { NextFunction, Request, Response } from 'express';
import studentValidationSchema from '../students/students.Joivalidation';
import { UserServices } from './user.service';
import catchAsync from '../../utlis/catchAsync';

const createStudent = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { password, student: studentData } = req.body;
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  },
);

export const UserController = {
  createStudent,
};
