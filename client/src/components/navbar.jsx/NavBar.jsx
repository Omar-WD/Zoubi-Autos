import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const { isLoading, signout, user } = useContext(AuthContext);
  const location = useLocation();
  console.log("Nav user", user);

  const handleSignout = () => {
    signout();
  };

  const scrollToUberUns = () => {
    const element = document.getElementById("über-uns");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && decodeURIComponent(location.hash) === "#über-uns") {
      scrollToUberUns();
    }
  }, [location]);

  const scrollToKontakt = () => {
    const element = document.getElementById("kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (location.pathname === "/" && decodeURIComponent(location.hash) === "#kontakt") {
      scrollToKontakt();
    }
  }, [location]);

  return (
    <Navbar expand="xxl" className="Navbar">
      <Container className="NavbarCountainer">
        <Navbar.Brand as={Link} to="/" className="logoBox">
          <img src="./logo20.png" alt="logo" className="logo" />
          {/* <h2 style={{color:"white", fontFamily:"fantasy", lineHeight:"28px", textAlign:"center"}}>EL ZOOBI AUTOHANDEL</h2> */}
          {/* <h5 style={{color:"white", fontFamily:"-moz-initial", lineHeight:"28px", textAlign:"center"}}>AN- UND VERKAUF VON GEBRAUCHWAGEN</h5> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"white"}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Startseite & Service
            </Nav.Link>
            <Nav.Link as={Link} to="/gebrauchwagen" className="nav-link">
              Gebrauchtwagen-angebote
            </Nav.Link>
            <Nav.Link as={Link} to={{ pathname: "/", hash: "über-uns" }} className="nav-link">
             Über mich
            </Nav.Link>
            <NavDropdown title="Kontakt" className="KontaktDropDown" id="basic-nav-dropdown" menuVariant="dark">
              <NavDropdown.Item href="tel:+495219876303">Mobil Telefonieren</NavDropdown.Item>
              <NavDropdown.Item href="mailto:omarzoubi.1@outlook.com">Email Schreiben</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={{ pathname: "/", hash: "kontakt" }}>Mehr</NavDropdown.Item>
            </NavDropdown>
            {!isLoading && user ? <Nav.Link onClick={handleSignout}>Sign Out</Nav.Link> : ""}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
