import React from "react";

export default class NavBar extends React.Component{
    constructor(){
        super()
    }
    render(){
        return[
            <nav>
                <li>Deamon Slayer</li>
                <li>Character Detail</li>
                <li>About</li>
            </nav>
        ]
    }
}