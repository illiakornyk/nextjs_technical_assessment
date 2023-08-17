import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email().required(),
  firstName: yup
    .string()
    .required('First name is required')
    .matches(/^[A-Za-z]+$/, 'Must be only alphabetical characters')
    .min(2)
    .max(50),
  lastName: yup
    .string()
    .required('Last name is required')
    .matches(/^[A-Za-z]+$/, 'Must be only alphabetical characters')
    .min(2)
    .max(50),
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .matches(/^\+?[0-9]+$/, 'Must be only digits or start with a +')
    .min(10)
    .max(15),
  subject: yup
    .string()
    .required('Subject is required')
    .oneOf(['subject1', 'subject2', 'subject3', 'subject4']),
  message: yup.string().required('Message is required').min(10).max(500),
});
