import React, { Component } from 'react';
/*import ReactDOM from 'react-dom';*/
import "./Titulo.css";

class Titulo extends Component
{
    render(){
        var diseño = "Diseño";
        let separador = ["\\", "|", "/"];
        var programacion = "Programacion";
        let estado = 1;
        return(  
            <div>
                <div className = "app">
                    <h2 className = "titulo-nombre">
                        Agustin Matias Lezcano
                    </h2>
                    <sup className = "titulo-separacion">_________</sup>
                    <h4 className = "titulo-ejemplos">
                        <sub>
                            {diseño} {separador[estado]} {programacion}
                        </sub>
                    </h4>
                </div>
            </div>
        )
    }
}
export default Titulo;