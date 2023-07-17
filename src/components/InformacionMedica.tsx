import { useContext, } from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import { informacionMedicaSchema} from "../schemas/informacionMedicaSchema";
import Context from "../contexts/Context";


type DataMedica={
    eps: string;
    grupoSanguineo: string;       
    alergia: string;
    cirugias: string;    
    enfermedades: string; 
      
};




// const onSubmit = (values: DataUser) => {
    
//     setTimeout(() => {
//         console.log(values);
        
//       alert(JSON.stringify(values, null, 2));
//     }, 500);
//   };

    



const InformacionMedica =() =>{

    const {setStep, data, setData}= useContext(Context);
    
    let botonatras:string;


    const onSubmit = (values:DataMedica) =>{
        let newdata={values};
        {botonatras==="atras"? setStep("informaciondeportiva"):""};
        setData({...newdata, newdata});
        console.log(values);
        console.log(data);

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
                         <Field  type="text" name="grupoSanguineo" id="grupoSanguineo"
                        >                                
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