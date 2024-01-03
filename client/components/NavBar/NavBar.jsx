import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBarFunction() {
    return (
      <>
        <Navbar bg="dark" variant="dark"> {/* Corrected data-bs-theme attribute */}
          <Container>
            <Navbar.Brand href="#HomeLink">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#InteractiveMap">Interactive Map</Nav.Link>
              <Nav.Link href="#Species">Species</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  

export default NavBarFunction;
