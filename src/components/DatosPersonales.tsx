import { useContext, } from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import { datosPersonalesSchema} from "../schemas/datosPersonalesSchema";
import Context from "../contexts/Context";


type DataUser={
    fullName: string;
    identification: string;
    sexo: string;
    edad: string;
    peso: string;
    telefono: string;    
};




// const onSubmit = (values: DataUser) => {
    
//     setTimeout(() => {
//         console.log(values);
        
//       alert(JSON.stringify(values, null, 2));
//     }, 500);
//   };


const DatosPesonales =() =>{

    const {setStep, data, setData}= useContext(Context);

    let newdata={...data };

    const onSubmit = (values: DataUser) =>{
        
        let newdatas={values };
        setStep("datosacudiente");
        setData({...newdata,newdatas});
            
        console.log('submitting');
    };

    const onchange= ()=>{
        
        console.log("");
        
    }
   
    return (
        <main>          
            <section className="card">
                <h3>Datos Personales</h3>
                <Formik initialValues={data}
                  validationSchema={datosPersonalesSchema} onSubmit={onSubmit} onChange={onchange} >
                  <Form onChange={onchange} autoComplete="off" >
                     <fieldset>
                         <label htmlFor="fullName">Nombre Completo </label>
                         <Field  type="text" name="fullName" id="fullName" autoFocus 
                         >
                         </Field>
                         <ErrorMessage
                            name="fullName"
                            component="p"
                            className="error"
                        />
                         
                        </fieldset>
                     <fieldset>
                         <label htmlFor="identification">Documento de Identidad </label>
                         <Field  type="text" name="identification" id="identification"
                        >                                
                         </Field>
                         <ErrorMessage
                            name="identification"
                            component="p"
                            className="error"
                        />
                         
                     </fieldset>
                     <fieldset>
                            <div>
                            <label htmlFor="sexo">Sexo </label>
                            <label>
                                <Field type="radio" name="sexo" id="sexoM" value="M"></Field>
                                M
                            </label>
                            <label>
                                <Field type="radio" name="sexo" id="sexoF" value="F"></Field>
                                 F
                            </label>                            
                            </div>
                            <ErrorMessage
                            name="sexo"
                            component="p"
                            className="error"
                            />
                                                 
                     </fieldset>
                     <fieldset>
                        <label htmlFor="edad">Edad </label>
                        <Field  type="text" name="edad" id="edad"></Field>
                        <ErrorMessage
                            name="edad"
                            component="p"
                            className="error"
                        />
                       
                     </fieldset>
                     <fieldset>
                        <label htmlFor="peso">Peso </label>
                        <Field type="text" name="peso" id="peso"></Field>
                        <ErrorMessage
                            name="peso"
                            component="p"
                            className="error"
                        />
                       
                     </fieldset>
                     <fieldset>
                        <label htmlFor="telefono">Teléfono </label>
                        <Field type="text" name="telefono" id="telefono"></Field>
                        <ErrorMessage
                            name="telefono"
                            component="p"
                            className="error"
                        />
                       
                     </fieldset>
                     <div><span></span><button  type="submit" >Siguiente</button></div>
                  </Form>
                </Formik>                
            </section>
        </main>
    );
}
export default DatosPesonales;