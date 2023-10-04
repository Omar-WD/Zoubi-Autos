import "./Services.css";
import { Container, Button, Row, Col } from "react-bootstrap";

export default function Services() {

    // function handleScroll(){
    //     if
    // }




    window.addEventListener('scroll',()=>{
        // let content1 = document.querySelector(".service")
        let content2 = document.querySelector(".serviceTitle1")
        let content3 = document.querySelector(".serviceSubTitle1")
        let content4 = document.querySelector(".serviceParagraph1")
        
        let contentPosition1= content4.getBoundingClientRect().top
        let screenPosition= window.innerHeight
        if (contentPosition1  < screenPosition){
            // content1.classList.add("aaa") 
            content2.classList.add("bbb")
            content3.classList.add("ccc")
           
        }

        let content5 = document.querySelector(".serviceTitle2")
        let content6 = document.querySelector(".serviceSubTitle2")
        let content7 = document.querySelector(".serviceParagraph2")

        let contentPosition2= content7.getBoundingClientRect().top
        if (contentPosition2  < screenPosition){
            content5.classList.add("eee")
            content6.classList.add("fff")
         
        }
    })



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
          <Button className="heroButton" href="/gebrauchwagen">Entdecken Sie unsere Autos</Button>
        </div>
      </Row>
      <Row className="service">
        <h1 className="serviceHeader" >Unsere Servece</h1>
        <Row className="subService1">
          <Col xs={5}>
            <h1 className="serviceTitle1">Fahrzeugverkauf</h1>
            <h3 className="serviceSubTitle1">
              Finden Sie bei uns Ihren Traumwagen
            </h3>
          </Col>
          <Col xs={6}>
            <p className="serviceParagraph1">
              In unserem Autohaus finden Sie eine breite Palette von Fahrzeugen
              zur Auswahl. Unsere Verkaufsmitarbeiter stehen Ihnen gerne für
              eine umfassende und kompetente Beratung zur Verfügung. Wir bieten
              Ihnen selbstverständlich maßgeschneiderte Finanzierungsoptionen
              an, die Ihren individuellen Anforderungen entsprechen. Darüber
              hinaus bieten wir eine Gebrauchtwagengarantie an, um die
              hervorragende Qualität unserer Fahrzeuge zu betonen.
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
              Möchten Sie Ihren gebrauchten Wagen veräußern? Bei uns sind Sie an
              der richtigen Adresse! Besuchen Sie uns unbedingt und erhalten Sie
              von uns ein gerechtes Angebot. Selbstverständlich akzeptieren wir
              auch Fahrzeugtausche und stellen sicher, dass der gesamte Vorgang
              reibungslos abläuft.
            </p>
          </Col>
        </Row>
        <Row className="bewertungenIframe">
       <iframe src="https://www.autoscout24.de/haendler/el-zoobi-autohandel/bewertungen" ></iframe>
      </Row>
      </Row>
      
    </Container>
  );
}
