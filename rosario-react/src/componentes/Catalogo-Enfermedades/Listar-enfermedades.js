import React from 'react';
import { Link } from 'react-router-dom';

class Listarenfermedades extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {  }
    }
    state = { 
        datosCargados:false,
        enfermedades:[]

     }
 
    cargarEnfermedades(){
              fetch("http://localhost/API/Catalogos/Enfermedades/SP_Ver_Todas_enfermedades_lista.php")
              .then(respuesta=>respuesta.json())
              .then((datosRespuesta)=>{
                        console.log(datosRespuesta);
                        this.setState({datosCargados:true, enfermedades:datosRespuesta})
               }
              )
              .catch(console.log)
    }

    componentDidMount(){
        this.cargarEnfermedades();
    }

    render() { 
        const{datosCargados, enfermedades}=this.state
        
         if(!datosCargados){
            return (<div>Cargando...</div>);
         }
         else{
            return ( <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre de la enfermedad</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {enfermedades.map(
                       (enfermedades)=>(
                         <tr key={enfermedades.Id_enfermedad} >
                            <td>{enfermedades.Id_enfermedad}</td>
                            <td>{enfermedades.Nombre_enf}</td>
                            <td>{enfermedades.Descrip}</td>
                          <td>
                           <div className="btn-group" role="group" aria-label="">
                               <Link className="btn btn-primary" to={"/Insertarenfermedades"} >Agregar</Link>
                               <Link className="btn btn-primary" to={"/Editarenfermedades"}>Editar</Link>                            
                            </div>
                          </td>
                         </tr>
                        )   
                    )

                }                             
            </tbody>
        </table>  
            );
         }
  
        }       
}
 
export default Listarenfermedades;