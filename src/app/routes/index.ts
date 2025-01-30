import { Router } from 'express';
import { AcademicFacultyRoute } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicSemesterRoute } from '../modules/academicSemester/academicSemester.route';
import { StudentRouter } from '../modules/students/students.route';
import { UserRouter } from '../modules/user/user.route';
import { AcademicDepartmentRoute } from '../modules/academicDepartment/academicDepartment.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRouter,
  },
  {
    path: '/students',
    route: StudentRouter,
  },
  {
    path: '/academic-semester',
    route: AcademicSemesterRoute,
  },
  {
    path: '/academic-faculty',
    route: AcademicFacultyRoute,
  },
  {
    path: '/academic-department',
    route: AcademicDepartmentRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
