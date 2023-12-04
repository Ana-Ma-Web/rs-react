import * as yup from 'yup';
import { allCountries } from '../store/reducers/CountriesSlice';

export const UserSchema = yup.object().shape({
  age: yup.number().positive().required(),
  country: yup.string().oneOf(allCountries.data).required(),
  email: yup.string().email().required(),
  gender: yup.string().oneOf(['male', 'female', 'cat', 'other']).required(),
  imgBase64: yup.string().required(),
  name: yup
    .string()
    .matches(/^[A-Z].*$/)
    .required(),
  password: yup
    .string()
    .required('Password is a required field')
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%&?*"])[a-zA-Z0-9!@#$%&?*]{4,30}$/,
      'Password must contain at least 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character'
    ),
  tcAccept: yup.boolean().oneOf([true]).required(),
});
