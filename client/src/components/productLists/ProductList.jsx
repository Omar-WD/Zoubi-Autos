import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductList.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function ProductList() {
  const { isLoading, user } = useContext(AuthContext);
 
  const date = new Date();
  const currentYear = date.getFullYear();
  const [products, setProducts] = useState([]);
  const [selectMinPrice, setSelectMinPrice] = useState("0");
  const [selectMaxPrice, setSelectMaxPrice] = useState("100000000");
  const [minModellJahr, setMinModellJahr] = useState("0");
  const [maxModellJahr, setMaxModellJahr] = useState("5000");
  const [energyOption, setEnergyOption] = useState("");
  const [gearOption, setGearOption] = useState("");
  const [minKM, setMinKM] = useState("0");
  const [maxKM, setMaxKM] = useState("3000000");

  useEffect(() => {
    axios
      .get("http://localhost:3005/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [products]);

  ////////////////////////////////////////////////////////////////////////
  const handleMinPriceChange = (event) => {
    setSelectMinPrice(event.target.value);
  };
  const handleMaxPriceChange = (event) => {
    setSelectMaxPrice(event.target.value);
  };

  const priceList = [];

  for (let i = 0; i <= 24000; i += 1000) {
    priceList.push(i);
  }
  for (let i = 25000; i <= 90000; i += 5000) {
    priceList.push(i);
  }

  const priceOptions = priceList.map((price) => (
    <option key={price} value={price}>
      {price} €
    </option>
  ));

  ////////////////////////////////////////////////////////////////////////////////
  const handleMinModellJahr = (event) => {
    setMinModellJahr(event.target.value);
  };
  const handleMaxModellJahr = (event) => {
    setMaxModellJahr(event.target.value);
  };

  const years = [];
  for (let year = currentYear + 1; year >= 1990; year--) {
    years.push(year);
  }
  for (let year = 1989; year >= 1900; year--) {
    years.push(year);
  }
  const yearOptions = years.map((year) => (
    <option key={year} value={year}>
      {year}
    </option>
  ));
  //////////////////////////////////////////////////////////////////////////
  const handleEnergyOption = (event) => {
    setEnergyOption(event.target.value);
  };

  const energies = products.map((product) => product.energy);
  const uniqueenergies = [...new Set(energies)]; //filtering the array from duplicated values using Set

  const KraftstoffartOption = uniqueenergies.map((energy, index) => (
    <option key={index} value={energy}>
      {energy}
    </option>
  ));

  //////////////////////////////////////////////////////////////////////////
  const handleGetriebeOption = (event) => {
    setGearOption(event.target.value);
  };

  const gears = products.map((product) => product.Getriebe);
  const uniqueGears = [...new Set(gears)]; //filtering the array from duplicated values using Set

  const GetriebeOption = uniqueGears.map((gear, index) => (
    <option key={index} value={gear}>
      {gear}
    </option>
  ));
  //////////////////////////////////////////////////////////////////////////
  const handleMinKM = (event) => {
    setMinKM(event.target.value);
  };
  const handleMaxKM = (event) => {
    setMaxKM(event.target.value);
  };

  const kilometerList = [];
  for (let i = 10000; i < 300000; i += 10000) {
    kilometerList.push(i);
  }
  const minKilometer = kilometerList.map((kilometer) => (
    <option key={kilometer} value={kilometer}>
      {kilometer}
    </option>
  ));

  const maxKilometer = kilometerList.map((kilometer) => (
    <option key={kilometer} value={kilometer}>
      {kilometer}
    </option>
  ));

  //////////////////////////////////////////////////////////////////////////

  const handleDeleteProduct=(id)=>{

      axios
        .delete(`http://localhost:3005/api/products/${id}`)
        .then((response) => {
          console.log(response.data);
          window.alert("Product is deleted Successfully")
        })
        .catch((err) => {
          console.log(err);
        });
  }

  //////////////////////////////////////////////////////////////////////////
  const filteredProducts = products.filter((product) => {
    const priceInRange =
      product.price >= parseInt(selectMinPrice) &&
      product.price <= parseInt(selectMaxPrice);
    const modellJahrInRange =
      product.modelljahr >= parseInt(minModellJahr) &&
      product.modelljahr <= parseInt(maxModellJahr);
    const energyMatches =
      energyOption === "" || product.energy === energyOption;
    const gearMatches = gearOption === "" || product.Getriebe === gearOption;
    const kiloMeterRange =
      product.kilometer >= parseInt(minKM) &&
      product.kilometer <= parseInt(maxKM);

    return (
      priceInRange &&
      modellJahrInRange &&
      kiloMeterRange &&
      energyMatches &&
      gearMatches
    );
  });
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");

    function handleMediaQueryChange(e) {
      if (e.matches) {
        const detailsElement = document.querySelector("details");
        if (detailsElement) {
          detailsElement.setAttribute("open", true);
        }
      }
    }

    handleMediaQueryChange(mediaQuery);

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="product-list">
      <Container>
        <Row>
        
          <Col xs={12} lg={3} className="product-list-left-Col">
          <details >
          <summary style={{fontSize:"20px"}}>Filter</summary>
            <div className="filterDiv">
              <h4>Pries</h4>
              <Row>
                <Col>
                  <select
                  className="custom-select"
                    value={selectMinPrice}
                    onChange={handleMinPriceChange}
                  >
                    <option value="0">von</option>
                    {priceOptions}
                  </select>
                </Col>
                <Col>
                  <select
                    value={selectMaxPrice}
                    onChange={handleMaxPriceChange}
                  >
                    <option value="100000000">bis</option>
                    {priceOptions}
                  </select>
                </Col>
              </Row>
            </div>
            <div className="filterDiv">
              <h4>ModellJahr</h4>
              <Row>
                <Col>
                  <select value={minModellJahr} onChange={handleMinModellJahr}>
                    <option value="1100">von</option>
                    {yearOptions}
                  </select>
                </Col>
                <Col>
                  <select value={maxModellJahr} onChange={handleMaxModellJahr}>
                    <option value="5000">bis</option>
                    {yearOptions}
                  </select>
                </Col>
              </Row>
            </div>
            <div className="filterDiv">
              <h4>Kilometer</h4>
              <Row>
                <Col>
                  <select value={minKM} onChange={handleMinKM}>
                    <option value="0">von</option>
                    {minKilometer}
                  </select>
                </Col>
                <Col>
                  <select value={maxKM} onChange={handleMaxKM}>
                    <option value="3000000">bis</option>
                    <option value="5000">5000</option>
                    {maxKilometer}
                  </select>
                </Col>
              </Row>
            </div>
            <div className="filterDiv">
              <h4>Kraftstoffart</h4>
              <Row>
                <Col>
                  <select value={energyOption} onChange={handleEnergyOption}>
                    <option value="">alle</option>
                    {KraftstoffartOption}
                  </select>
                </Col>
              </Row>
            </div>
            <div className="filterDiv">
              <h4>Getriebe</h4>
              <Row>
                <Col>
                  <select value={gearOption} onChange={handleGetriebeOption}>
                    <option value="">alle</option>
                    {GetriebeOption}
                  </select>
                </Col>
              </Row>
            </div>
            <Button className="clearFilterBtn"
              onClick={() => {
                setGearOption(""),
                  setEnergyOption(""),
                  setMinModellJahr("1100"),
                  setMaxModellJahr("5000"),
                  setSelectMinPrice("0"),
                  setSelectMaxPrice("10000000"),
                  setMinKM("0", setMaxKM("3000000"));
              }}
            >
              Clear Filter
            </Button>
            </details>
          </Col>

          <Col xs={12} lg={8} className="product-list-right-Col">
            
              
            
            {filteredProducts.map((product) => (
              <Row key={product._id} className="productDev">
                <Col xs={7} sm={6} lg={4}>
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
                <Col xs={5} sm={6} lg={7} className="product-item-desc">
                  <Link to={`/${product._id}`}>
                    <Row>
                      <div className="productNamePrice">
                        <h5>
                          {product.marke} {product.modelljahr}
                        </h5>
                        <h5>{product.price} €</h5>
                      </div>
                    </Row>
                    <Row className="productDiscription">
                      <p>
                        {product.kategorie} {product.motor}L {product.energy}{" "}
                        {product.kilometer}km
                      </p>
                    </Row>
                  </Link>
                  {!isLoading && user ? (
                    <Row className="update-delete-btns">
                      <Col className="deleteBtn">
                        <button id="deleteBtn" onClick={()=>{handleDeleteProduct(product._id)}}>Delete</button>
                      </Col>
                    </Row>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
        {/* <Row>
          <embed src="https://www.autoscout24.de/haendler/z-automobile-gbr/bewertungen" type="" style={{height:"500px"}} />
          <embed src="https://home.mobile.de/home/index.html?partnerHead=false&colorTheme=default&customerId=2985472" type="" style={{height:"500px"}} />

        </Row> */}
      </Container>
    </div>
  );
}
