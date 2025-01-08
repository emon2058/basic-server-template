import Joi from 'Joi';

const guardianValidationSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  contactNo: Joi.string().required(),
});

// Students Schema Joi Validation
const studentValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string()
    .trim()
    .max(20)
    .required()
    .regex(/^[A-Z][a-z]*$/)
    .message('{#label} must be in capitalized format, e.g. Rahim'),
  email: Joi.string().email().required(),
  gender: Joi.string().valid('male', 'female', 'others').required().messages({
    'any.only': '{#label} must be one of [male, female, others]',
  }),
  blood: Joi.string().valid('A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'),
  age: Joi.number().required(),
  guardian: guardianValidationSchema.required(),
});

export default studentValidationSchema;
