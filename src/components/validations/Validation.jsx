import * as yup from 'yup';
// Validation Schema
export const loginValidationSchema = yup.object().shape({
    username:yup.string().required("Please enter Username"),
    password:yup.string().required("Please enter Password")
}) 