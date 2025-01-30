import { model, Schema } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './academicSemester.constant';
import AppError from '../../errors/AppError';

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    enum: {
      values: AcademicSemesterName,
    },
    required: true,
  },
  code: {
    type: String,
    enum: {
      values: AcademicSemesterCode,
    },
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  startMonth: {
    type: String,
    enum: Months,
  },
  endMonth: {
    type: String,
    enum: Months,
  },
});

// checking, if same name and yearexists then show error
academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await academicSemester.findOne({
    name: this.name,
    year: this.year,
  });
  if (isSemesterExists) {
    throw new AppError(404, 'Semester is already exists');
  }
  next();
});

export const academicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
