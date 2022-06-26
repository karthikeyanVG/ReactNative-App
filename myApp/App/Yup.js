import * as yup from "yup";

export const Form = yup.object().shape({
    Email: yup.string().required("Email is Required").email(),
    Password: yup.string().required("Password is Required").min(8),
    Name: yup.string().required("Enter Your Name"),
    phoneNumber: yup.number().required("Enter your Phone Number").min(10).max(10),
});
