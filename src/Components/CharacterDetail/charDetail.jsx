import React from "react";
import data from "../../data.json";
import { useParams, useHistory, useLocation } from "react-router";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import "./character.css"

export default function CharDetail(){
    const parametro = useParams();
    const history = useHistory();
    const location = useLocation();
        console.log(location)
    const redireccionamiento = () => {
        history.push("/")
    };    
       
    const Perfil= data.Characters.find( (personaje) => personaje.name === parametro.name );
     
        return(
            <div >
                <h1> Caracterizticas Avanzadas del Personaje </h1>
                 <Container className="containerCharacter">             
                    <Card className="fondoCard" border="dark" style={{ width: '30rem', border:'dark'}}>
                            <Card.Header>{Perfil.name} {Perfil.lastname}</Card.Header>
                            <Card.Img variant="top" src={Perfil.photo} />
                            <Card.Body>                                  
                                <Card.Text >
                                    <p className="letras"> Nombre: {Perfil.name}</p>
                                    <p className="letras"> Apellido: {Perfil.lastname}</p>
                                    <p className="letras"> Edad: {Perfil.age}</p>
                                    <p className="letras"> Raza: {Perfil.race}</p>  
                                    <p className="letras"> Sexo: {Perfil.sex}</p> 
                                </Card.Text>                                    
                            </Card.Body>
                            <Button onClick={redireccionamiento}  className="btn">
                                REDIRECCIONAR AL HOME
                            </Button>                        
                    </Card>
                </Container>
            </div>
        )
    
}