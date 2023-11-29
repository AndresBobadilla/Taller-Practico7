import { useContext } from "react";
import Context from "../contexts/Context";
import { Formik, Form, Field, ErrorMessage} from "formik";
import { datosAcudienteSchema} from "../schemas/datosAcudienteSchema";



const DatosAcudiente =()=>{
    const {setStep, data, setData}= useContext(Context);
    let botonatras:string;

    const onSubmit = (values:any) => {        
        {botonatras==="atras"? setStep("datospersonales"):setStep("datosemergencia")};
        setData({...values,values}); 
    };

   
    return(
        <main>          
            <section className="card">
                <h3>Datos Acudiente</h3>
                <Formik initialValues={data}
                  validationSchema={datosAcudienteSchema} onSubmit={onSubmit}  >
                  <Form autoComplete="off" >
                     <fieldset>
                         <label htmlFor="fullNameAcudiente">Nombre Completo </label>
                         <Field  type="text" name="fullNameAcudiente" id="fullNameAcudiente" autoFocus 
                         >
                         </Field>
                         <ErrorMessage
                            name="fullNameAcudiente"
                            component="p"
                            className="error"
                        />
                         
                     </fieldset>
                     <fieldset>
                         <label htmlFor="identificacionAcudiente">Documento de Identidad </label>
                         <Field  type="text" name="identificacionAcudiente" id="identificacionAcudiente"
                        >                                
                         </Field>
                         <ErrorMessage
                            name="identificacionAcudiente"
                            component="p"
                            className="error"
                        />
                         
                     </fieldset>
                     <fieldset>                            
                            <label htmlFor="parentesco">Parentesco </label>                            
                                <Field name="parentesco" id="parentesco" as="select">
                                <option value="">Seleccione tipo de parentesco</option>
                                <option value="madre">Madre</option>
                                <option value="padre">Padre</option>
                                <option value="otro">Otro</option>
                                </Field>
                            <ErrorMessage
                            name="parentesco"
                            component="p"
                            className="error"
                            />
                                                 
                     </fieldset>                     
                     <fieldset>
                        <label htmlFor="emailAcudiente">Email </label>
                        <Field type="email" name="emailAcudiente" id="emailAcudiente"></Field>
                        <ErrorMessage
                            name="emailAcudiente"
                            component="p"
                            className="error"
                        />
                       
                     </fieldset>
                     <fieldset>
                        <label htmlFor="telefonoAcudiente">Teléfono </label>
                        <Field type="text" name="telefonoAcudiente" id="telefonoAcudiente"></Field>
                        <ErrorMessage
                            name="telefonoAcudiente"
                            component="p"
                            className="error"
                        />
                       
                     </fieldset>
                     <div><button type="submit" onClick={()=>{ botonatras="atras"}}>Atras</button>
                      <button type="submit">Siguiente</button></div>
                  </Form>
                </Formik>                
            </section>
        </main>        

    );
}
export default DatosAcudiente;