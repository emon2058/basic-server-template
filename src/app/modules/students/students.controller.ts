import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './students.service';
import Joi from 'Joi';
// import studentValidationSchema from './students.Joivalidation';
import studentValidationSchema from './students.validation';

// const createStudent = async (req: Request, res: Response) => {
//   try {
//     const { students } = req.body;

//     // will call service function to send this data
//     const result = await StudentServices.createStudentIntoDB(students);
//     // send response
//     res.status(200).json({
//       success: true,
//       message: 'student created',
//       data: result,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { std_id } = req.params;

    const result = await StudentServices.deleteStudentFromDB(std_id);

    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

const getStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students retrieve successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

const getAStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { std_id } = req.params;
    const result = await StudentServices.getAStudentFromDB(std_id);
    res.status(200).json({
      success: true,
      message: 'get Student',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
export const StudentControllers = {
  getStudents,
  getAStudent,
  deleteStudent,
};
