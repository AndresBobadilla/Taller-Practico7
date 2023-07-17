import { createContext } from "react";


interface propContext{
    setStep: (p:string)=>void;
    step:string;  
    data: FormData;
    // setData: Function;
    setData: (Fuction:any)=>void;
}

type FormData={
    fullName: string;
    identification: string;
    sexo: string;
    edad: string;
    peso: string;
    telefono: string;
    fullNameAcudiente: string;
    identificacionAcudiente:string;
    parentesco:string;
    emailAcudiente:string;
    telefonoAcudiente:string;
    contactName: string;
    emailEmergency: string;    
    telefonoEmergencia: string;
    telefonoOpcional: string;
    posicionJuego: string;
    perfilDominante: string;    
    club: string;
    telefonoClub: string;
    eps: string;
    grupoSanguineo: string;       
    alergia: string;
    cirugias: string;    
    enfermedades: string; 
};


 const Context = createContext<propContext>({}as propContext);
//  const Context = createContext({});
 export default Context;