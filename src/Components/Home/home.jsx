import React from "react";
import data from "../../data.json"
import Character from "../Character/character";

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
                       <p>  {personaje.name}  </p>
                       <img src={personaje.photo} alt="" width="200"/>
                  </div>  )    
                       
                   
               })}
              
            </div>
        );
    }
}