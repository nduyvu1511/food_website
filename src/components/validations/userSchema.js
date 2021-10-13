import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  firstName: yup.string().required("Please enter a first name"),
  lastName: yup.string().required("Please enter a last name"),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  email: yup.string().email().required("Please enter a email"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

export const logInSchema = yup.object().shape({
  email: yup.string().email().required("Please enter a email"),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});
