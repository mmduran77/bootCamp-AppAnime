import React from "react";
import data from "../../data.json"
import Character from "../Character/character";
import About from "../About/about";
import { NavLink } from "react-router-dom";

export default class Home extends React.Component{
    constructor(props){
        super()
    }
    // Personajes(){
    //     return data.Characters.map( (personaje) => {
    //         <Character>
    //             name = {personaje.name}
    //             photo = {personaje.photo}
    //         </Character>
    //     })
    // }
    render(){
        return(
            <div>
                <h2> Listado de los personajes </h2>
               {data.Characters.map( (personaje) => {
                  return (
                  <div>
                       
                       <img src={personaje.photo} alt="" width="200"/>
                       <p> <NavLink to={`/CharDetail/${personaje.name}`}> {personaje.name} </NavLink> </p>
                  </div>  )    
                       
                   
               })}
              
            </div>
        );
    }
}