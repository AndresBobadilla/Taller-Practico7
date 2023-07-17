import { useContext, } from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import { infomacionDeportivaSchema} from "../schemas/informacionDeportivaSchema";
import Context from "../contexts/Context";


type DataDeportiva={
    posicionJuego: string;
    perfilDominante: string;    
    club: string;
    telefonoClub: string;
       
};




const InformacionDeportiva =() =>{

    const {setStep, data, setData}= useContext(Context);
    
    let botonatras:string;

    
    const onSubmit = (values:DataDeportiva) => {
        let newdata={values};
        {botonatras==="atras"? setStep("datosemergencia"):setStep("informacionmedica")};
        setData({...newdata, newdata});
        console.log("Form submitted!");
    };
    
    return (
        <main>          
            <section className="card">
                <h3>Información Deportiva</h3>
                <Formik initialValues={data}
                  validationSchema={infomacionDeportivaSchema} onSubmit={onSubmit}>
                  <Form autoComplete="off">
                     <fieldset>
                         <label htmlFor="posicionJuego">Posicion de Juego </label>
                         <Field  type="text" name="posicionJuego" id="posicionJuego" autoFocus 
                         >
                         </Field>
                         <ErrorMessage
                            name="posicionJuego"
                            component="p"
                            className="error"
                        />
                         
                        </fieldset>
                     <fieldset>
                         <label htmlFor="perfilDominante">Perfil Dominante </label>
                         <Field  type="text" name="perfilDominante" id="perfilDominante"
                        >                                
                         </Field>
                         <ErrorMessage
                            name="perfilDominante"
                            component="p"
                            className="error"
                        />
                         
                     </fieldset> 
                     <fieldset>
                        <label htmlFor="club">Ultimo Club o Academia </label>
                        <Field type="text" name="club" id="club"></Field>
                        <ErrorMessage
                            name="club"
                            component="p"
                            className="error"
                        />
                       
                     </fieldset>
                     <fieldset>
                        <label htmlFor="telefonoClub">Teléfono </label>
                        <Field type="text" name="telefonoClub" id="telefonoClub"></Field>
                        <ErrorMessage
                            name="telefonoClub"
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
export default InformacionDeportiva;