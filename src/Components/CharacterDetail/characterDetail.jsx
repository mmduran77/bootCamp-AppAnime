import React, {useState} from "react";
import data from "../../data.json"


//export default function CharacterDetail(){
const CharacterDetail=()=>{
   const [Perfil, setState] = useState(data.Characters[7]);
        
    
   const onSelectClick = (evento) => {
        setState(data.Characters.find( (personaje) => personaje.name === evento.target.value ))
    };
   
      
        return(
            <div>
                <h3> Selecciona un Personaje</h3>
                <select onChange={(evento) => {onSelectClick(evento);}}>
                    {data.Characters.map((personaje) => (
                        <option value={personaje.name}>
                            {`${personaje.name} ${personaje.lastname}`}
                        </option>
                    ))}
                </select>
                <br/>
                <h3> Detalles del Personaje</h3>
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
                    <p> Sexo: { Perfil.sex}</p>         
            </div>
        </div>
        )
    
}
export default CharacterDetail;