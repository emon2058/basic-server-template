import mongoose from 'mongoose';
import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { academicSemester } from './academicSemester.model';
import AppError from '../../errors/AppError';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  // checking academicSemesterNameCodeMapper['Summar']
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new AppError(404, 'name and code is not matching');
  }
  const result = await academicSemester.create(payload);

  return result;
};

const getAcademicSemesterFromDB = async () => {
  const result = await academicSemester.find();
  return result;
};

const getSingleAcademicSemesterFromDB = async (id: string) => {
  const result = await academicSemester.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(id) } },
  ]);
  console.log(result, id);
  return result;
};

const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new AppError(404, 'Invalid Semester Code');
  }
  const result = await academicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
export const AcademicSemesterService = {
  createAcademicSemesterIntoDB,
  getAcademicSemesterFromDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterIntoDB,
};
