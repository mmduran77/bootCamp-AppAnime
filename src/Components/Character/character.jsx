import React from "react";


export default class Character extends React.Component{
    constructor(props){
        super();
        
    }

    render(){
        return(
            <div>
                <h3>Character</h3>
                <img src={this.props.photo}/>
                personaje: {this.props.name}
            </div>
        )
    }
}