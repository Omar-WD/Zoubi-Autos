import {  FaWhatsapp } from "react-icons/fa";
import {  Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import {  
  BsFillPersonFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { MdLocationOn, MdEmail } from "react-icons/md";
import "./Contact.css"

export default function Contact() {

    useEffect(() => {
        function handleScroll() {
          let screenPosition = window.innerHeight;
       
    
          let content12 = document.querySelector(".iconsTextRow5");
          let content13 = document.querySelector(".iconsTextRow6");
          let content14 = document.querySelector(".iconsTextRow7");
          let content15 = document.querySelector(".iconsTextRow8");
          let content16 = document.querySelector(".iconsTextRow9");
    
          let contentPosition4 = content12.getBoundingClientRect().top;
          if (contentPosition4 < screenPosition) {
            content12.classList.add("c12");
            content13.classList.add("c13");
            content14.classList.add("c14");
            content15.classList.add("c15");
            content16.classList.add("c16");
          } else {
            content12.classList.remove("c12");
            content13.classList.remove("c13");
            content14.classList.remove("c14");
            content15.classList.remove("c15");
            content16.classList.remove("c16");
          }
        }
        
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
}, []);

  return (
    <Row className="map-RowInner">
      <h1 className="serviceHeader">Kontakt</h1>
      <Col xs={6}>
        <iframe
          className="mapIframe"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d993.8695986094704!2d8.571420097371002!3d52.03835955364296!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba3d18c28cc877%3A0xbeb282401f1bcf6b!2sEl%20Zoobi%20Autohandel!5e0!3m2!1sen!2sde!4v1696609365197!5m2!1sen!2sde"
        ></iframe>
      </Col>
      <Col xs={6} className="map-RowInner-Right">
        <Row className="iconsTextRow5">
          <BsFillPersonFill className="icon-icon" />
          <h4>Eigentümer: Marwan El Zoobi</h4>
        </Row>
        <Row className="iconsTextRow6">
          <BsFillTelephoneFill className="icon-icon" />
          <h4>Tel: +491725777558</h4>
        </Row>
        <Row className="iconsTextRow7">
          <FaWhatsapp className="icon-icon" />
          <h4>Mob: +491725777558</h4>
        </Row>
        <Row className="iconsTextRow8">
          <MdEmail className="icon-icon" />
          <h4>Mail: @gmail.com</h4>
        </Row>
        <Row className="iconsTextRow9">
          <MdLocationOn className="icon-icon" />
          <h4>Ziegelstraße 92A, 33609 Bielefeld</h4>
        </Row>
      </Col>
      
    </Row>

  );
}
