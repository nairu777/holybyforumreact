import React, { useContext } from 'react'
import { MyContext } from './../../context/MyContext'
import { Link} from 'react-router-dom';
import logo from './../../userlogo.png';
import { 
  Navbar, 
  Nav, 
  Container, 
  Row, 
  Col, 
  Image, 
  Jumbotron 
} from 'react-bootstrap';


function Header(props) {
  const {rootState, toggleNav, logoutUser} = useContext(MyContext);
  const {isAuth, theUser} = rootState;

  // If user Logged in, logoutbutton in header
  return (isAuth) ? (
    <div style={props.style}>
        <Jumbotron>
          <div><h1>Holybe forum</h1></div>
        </Jumbotron>
        <Container>
          <Row>
            <Col xs={3} md={1}>
              <Image src={logo} fluid/>
            </Col>
            <Col xs={6} md={4}>
              <div style={props.style} >
                <Link to='/profile'><span>{theUser.username}</span></Link>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div  style={props.style} >
                <button onClick={logoutUser}>Logout</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  ) : 
  (
    <div>
      <Navbar bg='light'>
        <Container>                    
          <Navbar.Brand href='#home'>Holybe forum</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link onClick={toggleNav}>Login / Sign up</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;