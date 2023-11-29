import { useContext, } from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import { informacionMedicaSchema} from "../schemas/informacionMedicaSchema";
import Context from "../contexts/Context";


const InformacionMedica =() =>{

    const {setStep, data, setData}= useContext(Context);
    
    let botonatras:string;

    const onSubmit = (values:any) =>{        
        {botonatras==="atras"? setStep("informaciondeportiva"):setStep("resumen")};
        setData({...values,values});
        
    };
    
    return (
        <main>          
            <section className="card">
                <h3>Información Medica</h3>
                <Formik initialValues={data}
                  validationSchema={informacionMedicaSchema} onSubmit={onSubmit}>
                  <Form autoComplete="off">
                     <fieldset>
                         <label htmlFor="eps">Seguro Médico EPS </label>
                         <Field  type="text" name="eps" id="eps" autoFocus 
                         >
                         </Field>
                         <ErrorMessage
                            name="eps"
                            component="p"
                            className="error"
                        />
                         
                        </fieldset>
                     <fieldset>
                         <label htmlFor="grupoSanguineo">Grupo Sanguíneo RH </label>
                         <Field name="grupoSanguineo" id="grupoSanguineo" as="select"> 
                            <option value="">Seleccione grupo sanguineo</option>
                            <option value="O-">0-</option>
                            <option value="O+">0+</option>
                            <option value="A-">A-</option>
                            <option value="A+">A+</option>
                            <option value="B-">B-</option>
                            <option value="B+">B+</option>
                            <option value="AB-">AB-</option>
                            <option value="AB+">AB+</option>

                         </Field>
                         <ErrorMessage
                            name="grupoSanguineo"
                            component="p"
                            className="error"
                        />
                         
                     </fieldset>                     
                     <fieldset>
                        <label htmlFor="alergia">Sufre de alergias? </label>
                        <Field  type="text" name="alergia" id="alergia"></Field>
                        <ErrorMessage
                            name="alergia"
                            component="p"
                            className="error"
                        />
                       
                     </fieldset>
                     <fieldset>
                        <label htmlFor="cirugias">Cirugías </label>
                        <Field type="text" name="cirugias" id="cirugias"></Field>
                        <ErrorMessage
                            name="cirugias"
                            component="p"
                            className="error"
                        />
                       
                     </fieldset>
                     <fieldset>
                        <label htmlFor="enfermedades">Enfemedades </label>
                        <Field type="text" name="enfermedades" id="enfermedades"></Field>
                        <ErrorMessage
                            name="enfermedades"
                            component="p"
                            className="error"
                        />
                       
                     </fieldset>
                     <div><button type="submit" onClick={()=>{ botonatras="atras"}}>Atras</button>
                     <button type="submit" >Siguiente</button></div>
                  </Form>
                </Formik>                
            </section>
        </main>
    );
}
export default InformacionMedica;