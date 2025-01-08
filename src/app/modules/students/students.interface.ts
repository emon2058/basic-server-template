import { Model, Types } from 'mongoose';

export type TGuardian = {
  name: string;
  address: string;
  contactNo: string;
};
export type TStudent = {
  id: string;
  user: Types.ObjectId;
  name: string;
  email: string;
  gender: 'male' | 'female' | 'others';
  blood?: 'A+' | 'A-' | 'AB+' | 'AB-' | 'B+' | 'B-' | 'O+' | 'O-';
  // age: number;
  guardian: TGuardian;
  isDeleted: boolean;
};

// for creating static
export interface StudentModel extends Model<TStudent> {
  isUserExist(id: string): Promise<TStudent | null>;
}

// for creating instance
// export interface StudentMethods {
//   isUserExist(id: string): Promise<TStudent | null>;
// }

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >;
