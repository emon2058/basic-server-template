import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

// call controller function
router.post('/create-student', UserController.createStudent);

export const UserRouter = router;
