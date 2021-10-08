import React, {useState} from "react";
import data from "../../data.json";
import "./character.css" 
import  Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/esm/Container";

//export default function CharacterDetail(){
const CharacterDetail=()=>{
   const [Perfil, setState] = useState(data.Characters[7]);
        
    
   const onSelectClick = (evento) => {
        setState(data.Characters.find( (personaje) => personaje.name === evento.target.value ))
    };      
        return(
            <div>
                <h1> Selecciona un Personaje</h1>
                <Container className="containerCharacter">
                    <select style={{alignContent:"center"}} onChange={(evento) => {onSelectClick(evento);}}>
                        {data.Characters.map((personaje) => (
                            <option value={personaje.name}>
                                {`${personaje.name} ${personaje.lastname}`}
                            </option>
                        ))}
                    </select>     
                    <br/>               
                    {/* <h3 > Detalles del Personaje</h3> */}
                    <div>                        
                        <Card className="fondoCard" style={{ width: '24rem', border:'1'}}>
                            <Card.Header>{Perfil.name} {Perfil.lastname} </Card.Header>
                                <Card.Img variant="top" src={Perfil.photo} />
                                <Card.Body>                                    
                                    <Card.Text>
                                        <p className="letras"> Nombre: {Perfil.name}</p>
                                        <p className="letras"> Apellido: {Perfil.lastname}</p>
                                        <p className="letras"> Edad: {Perfil.age}</p>
                                        <p className="letras"> Raza: {Perfil.race}</p>
                                        <p className="letras"> Sexo: {Perfil.sex}</p>
                                    </Card.Text>                                    
                                </Card.Body>
                            
                        </Card>
                </div>
            </Container>
        </div>
        )
    
}
export default CharacterDetail;