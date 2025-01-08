import { Student } from '../students.model';
import { TStudent } from './students.interface';

const getAllStudentsFromDB = async () => {
  const resutl = await Student.find();
  return resutl;
};

const getAStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.aggregate([{ $match: { id: id } }]);
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};
export const StudentServices = {
  getAllStudentsFromDB,
  getAStudentFromDB,
  deleteStudentFromDB,
};
