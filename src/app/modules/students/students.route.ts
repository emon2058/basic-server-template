import express from 'express';
import { StudentControllers } from './students.controller';

const router = express.Router();

// call controller function
// router.post('/create-student', StudentControllers.createStudent);

router.get('/', StudentControllers.getStudents);

router.get('/:std_id', StudentControllers.getAStudent);

router.delete('/:std_id', StudentControllers.deleteStudent);

export const StudentRouter = router;
