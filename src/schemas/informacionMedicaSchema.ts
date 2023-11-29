import * as Yup from "yup";


export const informacionMedicaSchema = Yup.object().shape({
    eps: Yup.string()
    // .min(4, "Full name must be 4 character at least")
    .matches(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/, "EPS can only contain letters and spaces")
    .required("EPS is required"),
    grupoSanguineo: Yup.string()
    .oneOf(["O-", "O+", "A-","A+","B-","B+","AB-","AB+"], "Must select a valid kinship")
    .required("RH is required"),
    alergia: Yup.string()
    .matches(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/, "Allergy can only contain letters and spaces")
    .required("Allergy is requered"),
    cirugias: Yup.string()
    .matches(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/, "Surgeries can only contain letters and spaces")
    .required("Surgeries is required"),
    enfermedades: Yup.string()
    .matches(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/, "Diseases can only contain letters and spaces")
    .required("Diseases is required")
    
});