import { model, Schema } from 'mongoose';
import {
  // StudentMethods,
  StudentModel,
  TGuardian,
  TStudent,
} from './students/students.interface';

const guardianSchema = new Schema<TGuardian>({
  name: { type: String },
  address: { type: String },
  contactNo: { type: String },
});
const studentsSchema = new Schema<TStudent, StudentModel>({
  id: { type: String, required: true, unique: true },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User id is required'],
    unique: true,
    ref: 'User',
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true, // removes extra spaces
    maxlength: [20, 'Name should not more than 20 characters'],
    validate: {
      validator: function (value: string) {
        const nameStr = value.charAt(0).toUpperCase() + value.slice(1); // Rahim
        return nameStr === value;
      },
      message: '{VALUE} is not is capitalize format',
    },
  },
  email: { type: String, required: true },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'others'],
      message: '{VALUE} is not like male, female, others',
    },
    required: true,
  },
  blood: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
    },
  },
  // age: {
  //   type: Number,
  //   required: true,
  // },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// query middleware
studentsSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentsSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentsSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});
// creatina a custom statics methods
studentsSchema.statics.isUserExist = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

// creating a custom instance methods
// studentsSchema.methods.isUserExist = async function (id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// };

export const Student = model<TStudent, StudentModel>('Student', studentsSchema); // collection name Student
