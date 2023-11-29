import { useContext, } from "react";
import Context from "../contexts/Context";


const Resumen =() =>{

    const {setStep, data}= useContext(Context);
     
    const back = () =>{        
        setStep("informacionmedica");
        
    };
    
    const onSubmit = () =>{        
        setStep("mensaje");
        console.log(data);
       
    };
    return (
        <main>          
            <section className="summary">
                <h3>Resumen</h3>
                <div className="summary_detail">
                    <h3>Datos Personales</h3>
                    <ul>
                        <li>Nombre: {data.fullName}</li>
                        <li>Identificación: {data.identification}</li>
                        <li>Sexo: {data.sexo}</li>
                        <li>Edad: {data.edad}</li>
                        <li>Peso: {data.peso}</li>
                        <li>Teléfono: {data.telefono}</li>
                    </ul>
                </div>
                <div className="summary_detail">
                    <h3>Datos Acudiente</h3>
                    <ul>
                        <li>Nombre: {data.fullNameAcudiente}</li>
                        <li>Identificación: {data.identificacionAcudiente}</li>
                        <li>Parentesco: {data.parentesco}</li>
                        <li>Email: {data.emailAcudiente}</li>
                        <li>Teléfono: {data.telefonoAcudiente}</li>                        
                    </ul>
                </div>
                <div className="summary_detail">
                    <h3>Datos Emergencia</h3>
                    <ul>
                        <li>Nombre: {data.contactName}</li>
                        <li>Email: {data.emailEmergency}</li>
                        <li>Teléfono: {data.telefonoEmergencia}</li>
                        <li>Teléfono: {data.telefonoOpcional}</li>                        
                    </ul>
                </div>
                <div className="summary_detail">
                    <h3>Información Deportiva</h3>
                    <ul>
                        <li>Posición de juego: {data.posicionJuego}</li>
                        <li>Perfil Dominante: {data.perfilDominante}</li>
                        <li>Ultimo club: {data.club}</li>
                        <li>Teléfono Club: {data.telefonoClub}</li>                        
                    </ul>
                </div>
                <div className="summary_detail">
                    <h3>Información Medica</h3>
                    <ul>
                        <li>EPS: {data.eps}</li>
                        <li>Grupo Sanguíneo RH: {data.grupoSanguineo}</li>
                        <li>Alergias: {data.alergia}</li>
                        <li>Cirugías: {data.cirugias}</li>
                        <li>Enfermedades: {data.enfermedades}</li>                        
                    </ul>
                </div>
                <div className="summary_botons">
                    <button onClick={()=>back()}>Atras</button>
                    <button  onClick={()=>onSubmit()}>Enviar</button>
                </div>
                
                              
            </section>
        </main>
    );
}
export default Resumen;