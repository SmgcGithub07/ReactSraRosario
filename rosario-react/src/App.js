import './App.css';
import  Listarenfermedades  from "./componentes/Catalogo-Enfermedades/Listar-enfermedades";
import  Insertarenfermedades from './componentes/Catalogo-Enfermedades/Insertar-enfermedades';
import Editarenfermedades from './componentes/Catalogo-Enfermedades/Editar-enfermedades';
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
   <Router>         
                 <nav className="navbar navbar-expand navbar-light bg-light">
                     <div className="nav navbar-nav">
                         <a className="nav-item nav-link active" href="/" >Home <span className="sr-only">(current)</span></a>
                         <a className="nav-item nav-link" href="/Listarenfermedades">Listar Enfermedades</a>
                         <a className="nav-item nav-link" href="/Insertarenfermedades">Agregar Enfermedades</a>
                         <a className="nav-item nav-link" href="/Editarenfermedades">Editar Enfermedades</a>
                     </div>
                 </nav>
                 <div className='container'>
                  <br></br>
                  <Listarenfermedades></Listarenfermedades>
           </div>       
    </Router>
  );
}

export default App;
