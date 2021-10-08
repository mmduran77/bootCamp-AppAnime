import React from "react";
import data from "../../data.json"
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/col"
import Container from "react-bootstrap/esm/Container";
import "./home.css"
import Carousel from "react-bootstrap/Carousel"

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
            <div >
                
                <h1> Listado de los personajes </h1>
               {/* {data.Characters.map( (personaje) => {
                  return (
                  <Container className="containerHome">                    
                       <Card border="dark" className="fondoCard centrar" style={{ width: '24rem', border:'dark'}}>
                            <Card.Header>{personaje.name} {personaje.lastname}</Card.Header>
                            <Card.Img variant="top" className="imgRedonda"  src={personaje.photo}  />
                            <Card.Body>                                    
                                <Card.Text>
                                    <Button variant="dark">
                                        <NavLink  to={`/CharDetail/${personaje.name}`} className="barra"> Mas... </NavLink>
                                    </Button>
                                </Card.Text>                                    
                            </Card.Body>
                        </Card>                                            
                  </Container>                  
                  )                       
               })}        */}
               <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        <>
                            {data.Characters.map( (personaje) => {
                                return (
                                <Container className="containerHome">                    
                                    <Card border="dark" className="fondoCard centrar" style={{ width: '18rem', border:'dark'}}>
                                            <Card.Header>{personaje.name} {personaje.lastname}</Card.Header>
                                            <Card.Img variant="top" className="imgRedonda"  src={personaje.photo}  />
                                            <Card.Body>                                    
                                                <Card.Text>
                                                    <Button variant="dark">
                                                        <NavLink  to={`/CharDetail/${personaje.name}`} className="barra"> Mas... </NavLink>
                                                    </Button>
                                                </Card.Text>                                    
                                            </Card.Body>
                                        </Card>                                            
                                </Container>                  
                    )                       
                })}     
                        </>
                    ))}
                </Row>       
            </div>
        );
    }
}