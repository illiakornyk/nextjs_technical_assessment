import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email().required(),
  firstName: yup.string().min(2).max(50).required(),
  lastName: yup.string().min(2).max(50).required(),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(10)
    .max(15)
    .required(),
  subject: yup.string().oneOf(['subject1', 'subject2', 'subject3']).required(),
  message: yup.string().min(20).max(500).required(),
});
