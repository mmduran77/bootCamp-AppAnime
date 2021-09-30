import React from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super()
    }
    render(){
        return[
            
                <nav>
                    <p><NavLink to="/">Deamon Slayer</NavLink></p>
                    <p><NavLink to="/characterDetail">Character Detail</NavLink></p>
                    <p><NavLink to="/About">About</NavLink></p>
                
                </nav>
            
            
        ]
    }
}