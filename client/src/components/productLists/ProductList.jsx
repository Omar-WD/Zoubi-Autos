import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./ProductList.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [products]);

  return (
    <div className="product-list">
      <Container>
        <Row>
          <Col xs={3} className="product-list-left-Col">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint hic
              molestiae blanditiis ad nostrum eaque mollitia cumque dignissimos?
              Eum sit doloremque magnam assumenda fuga debitis accusamus
              dignissimos sunt libero incidunt.
            </p>
          </Col>

          <Col xs={8} className="product-list-right-Col">
            {products.map((product) => (
              <Row key={product._id} className="productDev">
                <Col xs={5}>
                  <Carousel slide={false} className="imageCarousel">
                    {product.images.map((image, index) => (
                      <Carousel.Item
                        key={index}
                        className="productImageContainer"
                      >
                        <img
                          className="productCarouselImage d-flex "
                          src={image}
                          alt={`Image ${index + 1} for ${product.name}`}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Col>
                <Col xs={7} className="product-item-desc">
                <Link to={`/${product._id}`}>
                  <Row>
                    
                    <div className="productNamePrice">
                  <h5>{product.marke}{" "}{product.modelljahr}</h5>
                  <h5>{product.price} €</h5>
                    </div>
                    
                  </Row>
                  <Row className="productDiscription">
                    <p>{product.kategorie} {product.motor}L {product.energy} {product.kilometer}km</p>
                  </Row>
                  
                  </Link>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
        <Row>
          <embed src="https://www.autoscout24.de/haendler/z-automobile-gbr/bewertungen" type="" style={{height:"500px"}} />
          <embed src="https://home.mobile.de/home/index.html?partnerHead=false&colorTheme=default&customerId=2985472" type="" style={{height:"500px"}} />

        </Row>
      </Container>
    </div>
  );
}
