import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./SingleProduct.css";
import {
  BsFillGearFill,
  BsFuelPumpFill,
  BsSpeedometer,
  BsFillCalendarDateFill,
} from "react-icons/bs";
import { GiCarDoor } from "react-icons/gi";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

export default function SingleProduct() {
  const { id } = useParams();
  // console.log(id);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3005/api/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  // console.log(product);
  if (!product) {
    // Handle loading or not found case
    return <div>Loading...</div>;
  }
  const erstzulassungDate = new Date(product.erstzulassung);
  const month = erstzulassungDate.getMonth();
  const year = erstzulassungDate.getFullYear();

  return (
    <div>
      <Container className="container">
        <Col
          xs={12}
          sm={11}
          lg={9}
          style={{ marginLeft: "auto", marginRight: "auto", marginTop: "50px" }}
        >
          <Row className="businessCard" style={{ width: "100%", marginBottom: "70px" }}>
            <img src="./bc3.png" className="logoImg" />
          </Row>

          <Row className="singleProductDiv" style={{ width: "100%" }}>
            <Col xs={8} className="singleProductleftColumn">
              <Row>
                <Carousel slide={false} className="singleImgCarousel">
                  {product.images.map((image, index) => (
                    <Carousel.Item key={index} className="singleImgItem">
                      <img
                        className="singleImg"
                        src={image}
                        alt={`Image ${index + 1} for ${product.name}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Row>
              <Row>
                <div className="descriptionDiv">
                  <Row className="descSubProperties">
                    <Col xs={3}>
                      <BsFillGearFill className="propertyIcon" />
                    </Col>
                    <Col xs={9}>
                      <Row>
                        <p>Getriebe</p>
                      </Row>
                      <Row>
                        <h6>Automatik</h6>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="descSubProperties">
                    <Col xs={3}>
                      <BsFuelPumpFill className="propertyIcon" />
                    </Col>
                    <Col xs={9}>
                      <Row>
                        <p>Kraftstoffart</p>
                      </Row>
                      <Row>
                        <h6>{product.energy}</h6>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="descSubProperties">
                    <Col xs={3}>
                      <BsSpeedometer className="propertyIcon" />
                    </Col>
                    <Col xs={9}>
                      <Row>
                        <p>Kilometerstand</p>
                      </Row>
                      <Row>
                        <h6>{product.kilometer} km</h6>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="descSubProperties">
                    <Col xs={3}>
                      <BsFillCalendarDateFill className="propertyIcon" />
                    </Col>
                    <Col xs={9}>
                      <Row>
                        <p>erstzulassung</p>
                      </Row>
                      <Row>
                        <h6>
                          {month}.{year}
                        </h6>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="descSubProperties">
                    <Col xs={3}>
                      <MdOutlineAirlineSeatReclineNormal className="propertyIcon" />
                    </Col>
                    <Col xs={10}>
                      <Row>
                        <p>Anzahl Sitzplätze</p>
                      </Row>
                      <Row>
                        <h6>{product.anzahlSitzplatze}</h6>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="descSubProperties">
                    <Col xs={3}>
                      <GiCarDoor className="propertyIcon" />
                    </Col>
                    <Col xs={10}>
                      <Row>
                        <p>Anzahl der Türen</p>
                      </Row>
                      <Row>
                        <h6>{product.anzahlDerTuren}</h6>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Row>
              <Row>
                <Row>
                  <details className="ausstattungDiv">
                    Ausstattung:
                    <ul className="ausstattungUl">
                      {product.ausstattung.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </details>
                </Row>
              </Row>
            </Col>
            <Col xs={4} className="singleProductRightColumn">
              <div>
                <h2>
                  {product.marke}
                </h2>
                <h5>{product.kategorie}</h5>
                <h5>{product.energy}</h5>
              </div>
              <div className="pricediv">
                <h2>Preis: {product.price} €</h2>
                <p>{Math.round(product.price / 1.19)} € (Netto), 19%</p>
              </div>
              <Button href="tel:+495219876303" className="callusBtn">
                <BiSolidPhoneCall /> Mobil Telefonieren
              </Button>
              <Button
                href="mailto:omarzoubi.1@outlook.com"
                className="callusBtn"
              >
                <AiOutlineMail /> Email Schreiben
              </Button>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}
