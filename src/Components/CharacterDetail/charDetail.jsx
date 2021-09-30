import React from "react";
import data from "../../data.json";
import { useParams, useHistory, useLocation } from "react-router";

export default function CharDetail(){
    const parametro = useParams();
    const history = useHistory();
    const location = useLocation();
        console.log(location)
    const redireccionamiento = () => {
        history.push("/")
    };
    
    
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         Perfil: data.Characters[7],
    //     };
    // }
    const Perfil= data.Characters.find( (personaje) => personaje.name === parametro.name );
    
    
  
    
        return(
            <div>
                <h1> Caracterizticas Avanzadas del Personaje </h1>
                <div >
                                    <button  onClick={redireccionamiento}> REDIRECCIONAR AL HOME</button>
                </div>
                <div>                   
                    <div>
                        <img src = {Perfil.photo} width="400" alt=""></img>
                    </div>
                    
                    <p> Nombre: {Perfil.name}</p>
                    <p> Apellido: {Perfil.lastname}</p>
                    <p> Edad: {Perfil.age}</p>
                    <p> Raza: {Perfil.race}</p>
                    <p> Amigos: {Perfil.friends.map( (amigos) => {
                        <p> amigos</p> 
                    })}</p>
                    <p> Sexo: {Perfil.sex}</p>         
            </div>
        </div>
        )
    
}