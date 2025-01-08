import config from '../../config';
import { Student } from '../students.model';
import { TStudent } from '../students/students.interface';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  // if password is not WebGLActiveInfo, use default password
  userData.password = password || (config.default_password as string);
  // set student role
  userData.role = 'student';

  // set manually generated it
  userData.id = '20302030';

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
