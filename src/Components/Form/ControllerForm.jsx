import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { useState } from "react";

export function Validacion(input){
    let errors = {}
    if(!input.username){
        errors.username = "Correo Electronico es requirido"
    } else if(!/\S+@\S+\.\S+/.test(input.username)){
        errors.username = "Correo Electronico debe ser una direccion de correo valida"
    }

    if(!input.asunto){
        errors.asunto = "El Asunto es requerido"
    } else if(Object.keys(input.asunto).length<10){
        errors.asunto = "El asunto debe tener al menos 10 caracteres"
    }

    if(!input.mensaje){
        errors.mensaje = "El Mensaje es requerido"
    } else if(Object.keys(input.mensaje).length>256){
        errors.mensaje = "El Mensaje no debe superar los 256 caracteres"
    }
    return errors;
}

function ControllerForm() {
    // const [username, setUsername] = useState("");
    // const [asunto, setAsunto] = useState("");
    // const [mensaje, SetMensaje] = useState("");

    
    const [state, setState] = useState({
        username: '',
        asunto: '',
        mensaje:''
    })

    const [fails, setFails] = useState({
        username: "Correo Electronico es requirido",
        asunto: "El Asunto es requerido",
        mensaje:"El Mensaje es requerido"
        })  

    function onSubmitForm(e) {
        e.preventDefault();
        alert("Datos enviados");
    }

    function onHandleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })

        setFails( Validacion({
            ...state, 
            [e.target.name]: e.target.value
        }))
    } 

    return( 
        <div>
            <Container className="containerForm">
                <h1> Formulario de Consulta </h1>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        <Form onSubmit={(e)=>onSubmitForm(e)}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <FloatingLabel controlId="floating" label="Correo Electronico" className="mb-3">
                                    <Form.Control type="email" name="username" value={state.username} onChange={(e) => onHandleChange(e)}  />
                                    {fails.username ? <p style={{color:"orange"}}>{fails.username}</p> : null}
                                </FloatingLabel>                    
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <FloatingLabel controlId="floatingInput" label="Asunto" className="mb-3">
                                    <Form.Control type="text" value={state.asunto} name="asunto"
                                    placeholder="Asunto" onChange={(e) => onHandleChange(e)}/>
                                    {fails.asunto ? <p style={{color:"orange"}}>{fails.asunto}</p> : null}
                                </FloatingLabel>                    
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <FloatingLabel controlId="floatingInput" label="Mensaje" className="mb-3">
                                    <Form.Control as="textarea" rows={6} value={state.mensaje} name="mensaje"
                                    placeholder="Mensaje" onChange={(e) => onHandleChange(e)}/>
                                    {fails.mensaje ? <p style={{color:"orange"}}>{fails.mensaje}</p> : null}
                                </FloatingLabel>                      
                            </Form.Group>
                            <Button variant="primary" type="submit" disabled={ fails.username || fails.asunto ||fails.mensaje ? true : false }>
                                Enviar
                            </Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
              
            </Container>
        </div>
    )
}

export default ControllerForm;