import React from "react";
import data from "../../data.json"

export default class CharacterDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Perfil: data.Characters[7],
        };
    }
    onSelectClick = (evento) => {
        this.setState(() => {
            return {
                Perfil : data.Characters.find( (personaje) => personaje.name === evento.target.value )
            }
        })
    }
    
  
    render(){
        return(
            <div>
                <h3> Selecciona un Personaje</h3>
                <select onChange={(evento) => {this.onSelectClick(evento);}}>
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
                        <img src = {this.state.Perfil.photo} width="400" alt=""></img>
                    </div>
                    
                    <p> Nombre: {this.state.Perfil.name}</p>
                    <p> Apellido: {this.state.Perfil.lastname}</p>
                    <p> Edad: {this.state.Perfil.age}</p>
                    <p> Raza: {this.state.Perfil.race}</p>
                    <p> Amigos: {this.state.Perfil.friends.map( (amigos) => {
                        <p> amigos</p> 
                    })}</p>
                    <p> Sexo: {this.state.Perfil.sex}</p>         
            </div>
        </div>
        )
    }
}