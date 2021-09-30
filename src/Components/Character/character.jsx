import React from "react";


export default class Character extends React.Component{
    constructor(props){
        super();
        
    }

    render(){
        return(
            <div>
                <h3>Character</h3>
                <img src={this.props.cphoto} alt=""/>
                personaje: {this.props.cname}
            </div>
        )
    }
}