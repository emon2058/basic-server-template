import config from '../../config';
import { Student } from '../students/students.model';
import { TStudent } from '../students/students.interface';
import { TUser } from './user.interface';
import { User } from './user.model';
import { academicSemester } from '../academicSemester/academicSemester.model';
import { generatedStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  // if password is not WebGLActiveInfo, use default password
  userData.password = password || (config.default_password as string);
  // set student role
  userData.role = 'student';

  // find academic semester info
  const admissionSemester = await academicSemester.findById(
    studentData.admissionSemester,
  );

  // create a user
  userData.id = generatedStudentId(admissionSemester);

  const newUser = await User.create(userData);

  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await Student.create(studentData);

    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
