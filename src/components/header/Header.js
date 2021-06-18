import React, {useContext} from 'react'
import {MyContext} from '../../context/MyContext'
import { Link} from 'react-router-dom';
import logo from './../../userlogo.png';
import {Navbar, Container, Row, Col, Image, Jumbotron} from "react-bootstrap";


function Header(props) {
    const {rootState, logoutUser} = useContext(MyContext);
    const {isAuth, theUser} = rootState;


    // If user Logged in, logoutbutton in header
    if (isAuth) {
        return (
            <div style={props.style} >
                <Jumbotron>

                <div><h1>Holybe forum</h1></div>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={logo} fluid/>
                        </Col>
                        <Col xs={6} md={4}>
                            <div  style={props.style} ><Link to="/profile"><span>{theUser.username}</span></Link></div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div  style={props.style} ><button onClick={logoutUser}>Logout</button></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    else{
    return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand href="#home">Holybe forum</Navbar.Brand>
            </Navbar>
        </div>
    )}
}

export default Header;