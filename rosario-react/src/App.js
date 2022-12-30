import logo from './logo.svg';
import './App.css';
import  Listarenfermedades  from "./componentes/Catalogo-Enfermedades/Listar-enfermedades";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
   <Router>
         <div className='container'>
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a href="#" class="nav-link active">Active</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Action</a>
                </div>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Another link</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link disabled">Disabled</a>
              </li>
            </ul>
                <Listarenfermedades></Listarenfermedades>
         </div>       
    </Router>
  );
}

export default App;
