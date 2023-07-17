import * as Yup from "yup";


export const datosPersonalesSchema = Yup.object().shape({
    fullName: Yup.string()
    // .min(4, "Full name must be 4 character at least")
    .matches(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/, "Full name can only contain letters and spaces")
    .required("Full name is required"),
    identification: Yup.string()
    .matches(/^[0-9]+$/, "The identification must have only numbers")
    .required("Identication is required"),
    sexo: Yup.string()
    .required("Gender is requered"),
    edad: Yup.string()
    .max(3,"Age must have a maximum of three digits")
    .matches(/^[0-9]+$/, "The edad must have only numbers")
    .required("Age is required"),
    peso: Yup.string()
    .max(3,"Weight must have a maximum of three digits")
    .matches(/^[0-9]+$/, "The weight must have only numbers")
    .required("Weight is required"),
    telefono: Yup.string()
    .matches(/^[0-9]+$/, "The phone must have only numbers")
    .required("Phone is required"),
});