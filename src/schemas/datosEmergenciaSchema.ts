import * as Yup from "yup";




export const datosEmergenciaSchema = Yup.object().shape({
    contactName: Yup.string()
    // .min(4, "Full name must be 4 character at least")
    .matches(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/, "Full name can only contain letters and spaces")
    .required("Full name is required"),
    emailEmergency: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"), 
    telefonoEmergencia: Yup.string()
    .matches(/^[0-9]+$/, "The phone must have only numbers")
    .required("Phone is required"),
    telefonoOpcional: Yup.string()
    .matches(/^[0-9]+$/, "The phone must have only numbers")
    .required("Phone is required"),
});