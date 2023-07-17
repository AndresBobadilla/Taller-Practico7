import { useContext, } from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import { datosEmergenciaSchema} from "../schemas/datosEmergenciaSchema";
import Context from "../contexts/Context";


type DataEmergency={
    contactName: string;
    emailEmergency: string;    
    telefonoEmergencia: string;
    telefonoOpcional: string;
       
};





const DatosEmergencia =() =>{

    const {setStep, data, setData}= useContext(Context);
    let botonatras:string;

    const onSubmit = (values: DataEmergency) => {
        {botonatras==="atras"? setStep("datosacudiente"):setStep("informaciondeportiva")};
        let newdata={values};
        setData({...newdata, newdata});
        console.log("Form submitted!");
    };

    return (
        <main>          
            <section className="card">
                <h3>Contacto de Emergencia</h3>
                <Formik initialValues={data}
                  validationSchema={datosEmergenciaSchema} onSubmit={onSubmit}>
                  <Form autoComplete="off">
                     <fieldset>
                         <label htmlFor="contactName">Nombre Completo </label>
                         <Field  type="text" name="contactName" id="contactName" autoFocus 
                         >
                         </Field>
                         <ErrorMessage
                            name="contactName"
                            component="p"
                            className="error"
                        />
                         
                        </fieldset>
                     <fieldset>
                         <label htmlFor="emailEmergency">Email </label>
                         <Field  type="email" name="emailEmergency" id="emailEmergency"
                        >                                
                         </Field>
                         <ErrorMessage
                            name="emailEmergency"
                            component="p"
                            className="error"
                        />
                         
                     </fieldset> 
                     <fieldset>
                        <label htmlFor="telefonoEmergencia">Teléfono </label>
                        <Field type="text" name="telefonoEmergencia" id="telefonoEmergencia"></Field>
                        <ErrorMessage
                            name="telefonoEmergencia"
                            component="p"
                            className="error"
                        />
                       
                     </fieldset>
                     <fieldset>
                        <label htmlFor="telefonoOpcional">Teléfono </label>
                        <Field type="text" name="telefonoOpcional" id="telefonoOpcional"></Field>
                        <ErrorMessage
                            name="telefonoOpcional"
                            component="p"
                            className="error"
                        />
                       
                     </fieldset>
                     <div><button type="submit" onClick={()=>{ botonatras="atras";}}>Atras</button>
                     <button type="submit">Siguiente</button></div>
                  </Form>
                </Formik>                
            </section>
        </main>
    );
}
export default DatosEmergencia;