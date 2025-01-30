import { Request, Response } from 'express';
import catchAsync from '../../utlis/catchAsync';
import { AcademicDepartmentServices } from './academicDepartment.service';

const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body);
    res.status(200).json({
      success: true,
      message: 'Academic Department is created',
      data: result,
    });
  },
);

const getAllAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await AcademicDepartmentServices.getAllAcademicDepartmentFromDB();
    res.status(200).json({
      success: true,
      message: 'get all Academic Department',
      data: result,
    });
  },
);

const getSingleAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { departmentId } = req.params;
    const result =
      await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(
        departmentId,
      );
    res.status(200).json({
      success: true,
      message: 'get single Academic Department',
      data: result,
    });
  },
);
const updateAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { departmentId } = req.params;
    const result =
      await AcademicDepartmentServices.updateAcademicDepartmentIntoDB(
        departmentId,
        req.body,
      );
    res.status(200).json({
      success: true,
      message: 'update Academic Department',
      data: result,
    });
  },
);

export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
};
