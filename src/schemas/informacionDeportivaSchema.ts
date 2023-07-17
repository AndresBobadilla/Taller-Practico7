import * as Yup from "yup";




export const infomacionDeportivaSchema = Yup.object().shape({
    posicionJuego: Yup.string()
    // .min(4, "Full name must be 4 character at least")
    .matches(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/, "Game position can only contain letters and spaces")
    .required("Game position is required"),
    perfilDominante: Yup.string()
    // .min(4, "Full name must be 4 character at least")
    .matches(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/, "Dominant profile can only contain letters and spaces")
    .required("Dominant profile is required"),
    club: Yup.string()
    // .min(4, "Full name must be 4 character at least")
    .matches(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/, "Club o Academy can only contain letters and spaces")
    .required("Club or Academy is required"),    
    telefonoClub: Yup.string()
    .matches(/^[0-9]+$/, "The phone must have only numbers")
    .required("Phone is required"),
});