import { useEffect } from "react";
import "./Services.css";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import { FaCar, FaTools } from "react-icons/fa";
import { AiFillEuroCircle } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Contact from "../contact/Contact";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthProvider";

export default function Services() {
  // const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    function handleScroll() {
      let screenPosition = window.innerHeight;
    
      let content13 = document.querySelector(".serviceHeader");
      let content8 = document.querySelector(".iconsTextRow1");
      let content9 = document.querySelector(".iconsTextRow2");
      let content10 = document.querySelector(".iconsTextRow3");
      let content11 = document.querySelector(".iconsTextRow4");
      let content12 = document.querySelector(".iconsTextRow20");

      let contentPosition3 = content13.getBoundingClientRect().top;
      if (contentPosition3 < screenPosition) {
        content8.classList.add("c8");
        content9.classList.add("c9");
        content10.classList.add("c10");
        content11.classList.add("c11");
        content12.classList.add("c20");
      } else {
        content8.classList.remove("c8");
        content9.classList.remove("c9");
        content10.classList.remove("c10");
        content11.classList.remove("c11");
        content12.classList.remove("c20");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // } else {
    return (
      <Container className="servicePG">
        <Row className="heroSection">
          <img src="j.jpeg" alt="" />
          <div className="but">
            <h1 style={{ color: "white" }}>El Zoobi Autohandel</h1>
            <h5 style={{ color: "white", marginBottom: "50px" }}>
              An- und Verkauf von Gebrauchwagen
            </h5>
            <Button className="heroButton" href="/gebrauchwagen">
              Zu den Autos
            </Button>
          </div>
        </Row>
        <Row className="aboutUs" id="über-uns">
          <Row className="aboutUsInner">
            <Row>
              <h1 className="serviceHeader">Über mich</h1>
            </Row>
            <Row className="aboutUsIntroRow">
              <Col xs={12} lg={6} className="aboutUsIntroCol">
                <h1 className="serviceSubHeader">El Zoobi Autohandel</h1>
                <p>
                  Ich heiße Sie herzlich auf meiner Webseite willkommen und
                  schätze es, dass Sie den Weg zu mir gefunden haben. Ich habe
                  ständig eine vielfältige Auswahl an gut gepflegten
                  Gebrauchtwagen für Sie verfügbar. Eine Probefahrt ist
                  jederzeit möglich, denn Kundenservice hat bei mir höchste
                  Priorität! Ich stehe Ihnen in jeder Phase des Autokaufs zur
                  Seite und berate Sie gerne.
                </p>
              </Col>
              <Col xs={12} lg={6} className="keysImgs">
                <a href="/gebrauchwagen">
                  <Image src="7.jpg" className="keyImg1" />
                </a>

                <a href="#kontakt">
                  <Image src="8.jpg" className="keyImg2" />
                </a>
              </Col>
            </Row>
          </Row>
        </Row>

        <Row className="service">
          <Row className="serviceInner">
            <h1 className="serviceHeader">Mein Service</h1>
            <Row className="subService1">
              <Col xs={12} lg={5}>
                <img src="./serv.jpeg" alt="" />
              </Col>
              <Col xs={12} lg={6}>
                <p className="serviceParagraph1">
                  Möchten Sie Ihren Gebrauchtwagen verkaufen? Bei mir sind Sie
                  an der richtigen Adresse! Besuchen Sie mich und erhalten Sie
                  von mir ein gerechtes Angebot. Es besteht auch die Möglichkeit
                  Ihren gebrauchten Wagen als Einzahlung zu verwenden.
                </p>
              </Col>
            </Row>
          </Row>
        </Row>

        <Row className="bewertungr-Row">
          <Row className="bewertungr-RowInner">
            <h1 className="serviceHeader">Ich biete Ihnen</h1>
            <Col xs={12} lg={6} className="bewertungr-RowInner-left">
              <Row className="iconsTextRow1">
                <BsFillCheckCircleFill className="icon-icon" />

                <h4>Langjährige Erfahrung</h4>
              </Row>
              <Row className="iconsTextRow2">
                <FaCar className="icon-icon" />
                <h4>Vielfalt an Autos und Preisen</h4>
              </Row>
              <Row className="iconsTextRow3">
                <AiFillEuroCircle className="icon-icon" />
                <h4>faire Preise im Verkauf & im Einkauf</h4>
              </Row>

              <Row className="iconsTextRow4">
                <FaTools className="icon-icon" />
                <h4>Autos in gutem Zustand</h4>
              </Row>
              <Row className="iconsTextRow20">
                <AiFillEuroCircle className="icon-icon" />
                <h4>Bar An- und Verkauf</h4>
              </Row>
            </Col>
            <Col xs={12} lg={6} className="bewertungen">
              <iframe
                className="bewertungenIframe"
                src="https://www.autoscout24.de/haendler/el-zoobi-autohandel/bewertungen"
              ></iframe>
            </Col>
          </Row>
        </Row>
        <Row className="map-Row" id="kontakt">
          <Contact />
        </Row>
      </Container>
    );
  }
// }
