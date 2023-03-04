import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  BsFillGrid3X3GapFill} from "react-icons/bs";

function Menu(){
  return(
    <Navbar bg="light" variant="light" expand="lg" fixed="top"> 
      <Container>
      <BsFillGrid3X3GapFill size="50px" color="green" />
        <Navbar.Brand href="#home">Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">CEO Connect</Nav.Link>
            <Nav.Link href="#link">Unit News</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;