import { z } from 'zod';

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Department name should be string',
    }),
    academicFaculty: z.string({
      invalid_type_error: ' academic faculty must be string',
    }),
  }),
});

const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Academic Department name should be string',
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: ' academic faculty must be string',
      })
      .optional(),
  }),
});

export const AcademicDepartmentValidation = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
