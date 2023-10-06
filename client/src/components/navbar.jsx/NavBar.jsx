import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
    return (
        <Navbar expand="lg"   className='Navbar'>
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href='/home'>Startseite & Service</Nav.Link>
                <Nav.Link href="/gebrauchwagen">Gebrauchtwagen-angebote</Nav.Link>
                <Nav.Link href="/home#über-uns">Über Uns</Nav.Link>
                <NavDropdown title="Kontakt" id="basic-nav-dropdown" menuVariant='dark'>
                  <NavDropdown.Item href="tel:+495219876303">Mobil Telefonieren</NavDropdown.Item>
                  <NavDropdown.Item href="mailto:omarzoubi.1@outlook.com">Email Schreiben</NavDropdown.Item>
                  <NavDropdown.Item href="/home#kontakt">Mehr</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    

