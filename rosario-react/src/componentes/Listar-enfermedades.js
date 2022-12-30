import React from 'react';
//import { Component } from "react";

class Listarenfermedades extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    //state = {  }
    render() { 
        return ( <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre de la enfermedad</th>
                    <th>Descripción</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>Gonorrea</td>
                    <td>Por caliente</td>
                </tr>
              
            </tbody>
        </table>  
            );
    }
} 
export default Listarenfermedades;