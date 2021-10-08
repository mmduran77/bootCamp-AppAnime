import React from "react";
import { NavLink } from "react-router-dom";
import "./about.css"
import Button from "react-bootstrap/Button";


export default function About(){
    return(
        <div>
           <h1>Desarrollado por Miguel Duran</h1>
           <h3>Analista Programador Universitario</h3>
           <p> Incursionando en React</p>

           <div className="boton">
                <Button variant="info" size="lg" >
                    <NavLink  to={`/Form`} className="barra"> Enviar una consulta </NavLink>
                </Button>
            </div>         
        </div>
    )    
}