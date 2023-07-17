import * as Yup from "yup";




export const datosAcudienteSchema = Yup.object().shape({
    fullNameAcudiente: Yup.string()
    // .min(4, "Full name must be 4 character at least")
    .matches(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/, "Full name can only contain letters and spaces")
    .required("Full name is required"),
    identificacionAcudiente: Yup.string()
    .matches(/^[0-9]+$/, "The identification must have only numbers")
    .required("Identication is required"),
    parentesco: Yup.string()
    .oneOf(["madre", "padre", "otro"], "Must select a valid kinship")
    .required("kinship is requered"),
    emailAcudiente: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),    
    telefonoAcudiente: Yup.string()
    .matches(/^[0-9]+$/, "The phone must have only numbers")
    .required("Phone is required"),
});