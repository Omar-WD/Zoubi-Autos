import { useEffect, useState } from "react";
import "./Services.css";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import { FaCar,FaTools,FaWhatsapp } from 'react-icons/fa';
import { AiFillEuroCircle, } from 'react-icons/ai';
import { BsFillCheckCircleFill,BsFillPersonFill,BsFillTelephoneFill} from 'react-icons/bs';
import { MdLocationOn} from 'react-icons/md';




export default function Services() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function handleScroll() {
      let content2 = document.querySelector(".serviceTitle1");
      let content3 = document.querySelector(".serviceSubTitle1");
      let content4 = document.querySelector(".serviceParagraph1");

      let contentPosition1 = content4.getBoundingClientRect().top;
      let screenPosition = window.innerHeight;
      if (contentPosition1 < screenPosition) {
        content2.classList.add("bbb");
        content3.classList.add("ccc");
      }

      let content5 = document.querySelector(".serviceTitle2");
      let content6 = document.querySelector(".serviceSubTitle2");
      let content7 = document.querySelector(".serviceParagraph2");

      let contentPosition2 = content7.getBoundingClientRect().top;
      if (contentPosition2 < screenPosition) {
        content5.classList.add("eee");
        content6.classList.add("fff");
      }


      let content8 = document.querySelector(".iconsTextRow1");
      let content9 = document.querySelector(".iconsTextRow2");
      let content10 = document.querySelector(".iconsTextRow3");
      let content11 = document.querySelector(".iconsTextRow4");
      let content16=document.querySelector(".bewertungr-RowInner-left")
  
      let contentPosition3 = content8.getBoundingClientRect().top;
        if (contentPosition3 < screenPosition) {
          content8.classList.add("c8");
          content9.classList.add("c9");
          content10.classList.add("c10");
          content11.classList.add("c11");
          content16.classList.add("c16")
        }
        else{
          content8.classList.remove("c8");
          content9.classList.remove("c9");
          content10.classList.remove("c10");
          content11.classList.remove("c11");
          content16.classList.remove("c16")
        }



      let content12 = document.querySelector(".iconsTextRow5");
      let content13 = document.querySelector(".iconsTextRow6");
      let content14 = document.querySelector(".iconsTextRow7");
      let content15 = document.querySelector(".iconsTextRow8");
  
      let contentPosition4 = content12.getBoundingClientRect().top;
        if (contentPosition4 < screenPosition) {
          content12.classList.add("c12");
          content13.classList.add("c13");
          content14.classList.add("c14");
          content15.classList.add("c15");
        }
        else{
          content12.classList.remove("c12");
          content13.classList.remove("c13");
          content14.classList.remove("c14");
          content15.classList.remove("c15");
        }
    }



    

    window.addEventListener("load", () => {
      setIsLoading(false);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container className="servicePG">
        <Row className="heroSection">
          <img src="2.jpg" alt="" />
          <h3 className="firstSentece">Wir verkaufen kein Produkt.</h3>
          <h3 className="secondSentece">Wir verkaufen eine Lösung.</h3>
          <div className="but">
            <h1 style={{ color: "white" }}>El Zoobi AutoHandel</h1>
            <h5 style={{ color: "white", marginBottom: "50px" }}>
              An- und Verkauf von Gebrauchwagen
            </h5>
            <Button className="heroButton" href="/gebrauchwagen">
              Entdecken Sie unsere Autos
            </Button>
          </div>
        </Row>
        <Row className="aboutUs">
          <Row className="aboutUsInner">
          <Row>
            <h1 className="serviceHeader">Über uns</h1>
          </Row>
          <Row>
            <Col xs={6}>
              <h1 className="serviceHeader">El Zoobi Autohandel</h1>
              <p>
                Wir heißen Sie herzlich auf unserer Website willkommen und
                schätzen es, dass Sie den Weg zu uns gefunden haben! Wir haben
                ständig eine vielfältige Auswahl an gut gepflegten
                Gebrauchtwagen für Sie verfügbar. Wir laden Sie herzlich ein,
                eine umfangreiche Probefahrt zu unternehmen! Kundenservice hat
                bei uns höchste Priorität! Wir stehen Ihnen in jeder Phase des
                Autokaufs zur Seite und beraten Sie gerne zu Themen wie
                Finanzierung, Inzahlungnahme und Garantiefragen.
              </p>
            </Col>
            <Col xs={6} className="keysImgs">
              <a href="/gebrauchwagen">
                <Image src="7.jpg" className="keyImg1" />
              </a>

              <a href="">
                <Image src="8.jpg" className="keyImg2" />
              </a>
            </Col>
          </Row>
          </Row>
        </Row>

        <Row className="service">
        <Row className="serviceInner">
          <h1 className="serviceHeader">Unsere Servece</h1>
          <Row className="subService1">
            <Col xs={5}>
              <h1 className="serviceTitle1">Fahrzeugverkauf</h1>
              <h3 className="serviceSubTitle1">
                Finden Sie bei uns Ihren Traumwagen
              </h3>
            </Col>
            <Col xs={6}>
              <p className="serviceParagraph1">
                In unserem Autohaus finden Sie eine breite Palette von
                Fahrzeugen zur Auswahl. Unsere Verkaufsmitarbeiter stehen Ihnen
                gerne für eine umfassende und kompetente Beratung zur Verfügung.
                Wir bieten Ihnen selbstverständlich maßgeschneiderte
                Finanzierungsoptionen an, die Ihren individuellen Anforderungen
                entsprechen. Darüber hinaus bieten wir eine
                Gebrauchtwagengarantie an, um die hervorragende Qualität unserer
                Fahrzeuge zu betonen.
              </p>
            </Col>
          </Row>
          <Row className="subService2">
            <Col xs={5}>
              <h1 className="serviceTitle2">Fahrzeugankauf</h1>
              <h3 className="serviceSubTitle2">
                Verkaufen Sie Ihr Fahrzeug an uns
              </h3>
            </Col>
            <Col xs={6}>
              <p className="serviceParagraph2">
                Möchten Sie Ihren gebrauchten Wagen veräußern? Bei uns sind Sie
                an der richtigen Adresse! Besuchen Sie uns unbedingt und
                erhalten Sie von uns ein gerechtes Angebot. Selbstverständlich
                akzeptieren wir auch Fahrzeugtausche und stellen sicher, dass
                der gesamte Vorgang reibungslos abläuft.
              </p>
            </Col>
          </Row>
          </Row>
        </Row>

        <Row className="bewertungr-Row">
        <Row className="bewertungr-RowInner">
        <h1 className="serviceHeader">Wir bieten Ihnen</h1>
        <Col xs={6} className="bewertungr-RowInner-left">
          <Row className="iconsTextRow1">
           
            <BsFillCheckCircleFill className="icon-icon"/>
            
            <h4>Langjährige Erfahrung</h4>
          </Row>
          <Row className="iconsTextRow2">
          <FaCar className="icon-icon"/>
          <h4>Vielfalt an Autos und Preisen</h4>
          </Row>
          <Row className="iconsTextRow3">
          <AiFillEuroCircle className="icon-icon"/>
          <h4>faire Preise im Verkauf & im Einkauf</h4>
          </Row>
          
          <Row className="iconsTextRow4">
          <FaTools className="icon-icon"/>
          <h4>Autos in gutem Zustand</h4>
          </Row>
          
        </Col>
        <Col xs={6}>
          <iframe className="bewertungenIframe" src="https://www.autoscout24.de/haendler/el-zoobi-autohandel/bewertungen"></iframe>
        </Col>
        </Row>
        </Row>
        <Row className="map-Row">
        <Row className="map-RowInner">
        <h1 className="serviceHeader">Kontakt</h1>
         <Col xs={6}>
         <iframe className="mapIframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d993.8695986094704!2d8.571420097371002!3d52.03835955364296!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba3d18c28cc877%3A0xbeb282401f1bcf6b!2sEl%20Zoobi%20Autohandel!5e0!3m2!1sen!2sde!4v1696609365197!5m2!1sen!2sde"></iframe>
         </Col >
         <Col xs={6} className="map-RowInner-Right" >
         <Row className="iconsTextRow5">
          <BsFillPersonFill className="icon-icon"/>
          <h4>Eigentümer: Marwan El Zoobi</h4>
          </Row>
          <Row className="iconsTextRow6">
          <BsFillTelephoneFill className="icon-icon"/>
          <h4>Tel: +491725777558</h4>
          </Row>
          <Row className="iconsTextRow7">
          <FaWhatsapp className="icon-icon"/>
          <h4>Mob: +491725777558</h4>
          </Row>
          <Row className="iconsTextRow8">
          <MdLocationOn className="icon-icon"/>
          <h4>Ziegelstraße 92A, 33609 Bielefeld</h4>
          </Row>
         </Col>
         
          </Row>
        </Row>
      </Container>
      
    );
  }
}