import { useState } from "react";
import DatosPersonales from "./components/DatosPersonales";
import DatosAcudiente from "./components/DatosAcudiente";
import Context from "./contexts/Context";
import DatosEmergencia from "./components/DatosEmergencia";
import InformacionDeportiva from "./components/InformacionDepotiva";
import InformacionMedica from "./components/InformacionMedica";



// type FormData = {
//   fullName: string;
//   identification: string;
//   sexo: any;
//   edad: string;
//   peso: string;
//   telefono: string;
// };

const initialValues = {
  fullName: "",
  identification: "",
  sexo: "",
  edad: "",
  peso: "",
  telefono: "",
  fullNameAcudiente: "",
  identificacionAcudiente:"",
  parentesco:"",
  emailAcudiente:"",
  telefonoAcudiente:"",
  contactName:"",
  emailEmergency:"",
  telefonoEmergencia:"",
  telefonoOpcional:"",
  posicionJuego: "",
  perfilDominante: "",    
  club: "",
  telefonoClub: "",
  eps: "",
  grupoSanguineo: "",
  alergia: "", 
  cirugias: "",    
  enfermedades: "",  

};

function App() {

  const [step, setStep] = useState("datospersonales");
  const [data, setData] = useState(initialValues)


  return (
    <>
      <Context.Provider value={{ step, setStep, data, setData }}>
        <div className="container">
          {step === "datospersonales" && <DatosPersonales/>}
          {step === "datosacudiente" && <DatosAcudiente />}
          {step === "datosemergencia" && <DatosEmergencia />}
          {step === "informaciondeportiva" && <InformacionDeportiva />}
          {step === "informacionmedica" && <InformacionMedica />}
        </div>
      </Context.Provider>
    </>

  )
}

export default App
