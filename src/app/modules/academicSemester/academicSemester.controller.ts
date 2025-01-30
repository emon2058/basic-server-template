import { Request, Response } from 'express';
import catchAsync from '../../utlis/catchAsync';
import { AcademicSemesterService } from './academicSemester.service';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicSemesterService.createAcademicSemesterIntoDB(
      req.body,
    );
    res.status(200).json({
      success: true,
      message: 'Academic semester created successfully',
      data: result,
    });
  },
);

const allAcademicSemester = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.getAcademicSemesterFromDB();
  res.status(200).json({
    success: true,
    message: 'all Academic semester',
    data: result,
  });
});

const singleAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result =
      await AcademicSemesterService.getSingleAcademicSemesterFromDB(id);
    res.status(200).json({
      success: true,
      message: 'single academic semester',
      data: result,
    });
  },
);

const updateAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicSemesterService.updateAcademicSemesterIntoDB(
      id,
      req.body,
    );
    res.status(200).json({
      success: true,
      message: 'update academic semester',
      data: result,
    });
  },
);
export const AcademicSemesterController = {
  createAcademicSemester,
  allAcademicSemester,
  singleAcademicSemester,
  updateAcademicSemester,
};
