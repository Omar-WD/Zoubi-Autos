import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductList.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

export default function ProductList() {
  const date = new Date();
  const currentYear = date.getFullYear();
  const [products, setProducts] = useState([]);
  const [selectMinPrice, setSelectMinPrice] = useState("0");
  const [selectMaxPrice, setSelectMaxPrice] = useState("100000000");
  const [minModellJahr, setMinModellJahr] = useState("0");
  const [maxModellJahr, setMaxModellJahr] = useState("5000");
  const [energyOption,setEnergyOption] = useState("")
  const [gearOption,setGearOption] = useState("")

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
    const handleEnergyOption=((event)=>{
      setEnergyOption(event.target.value);
  })


  const energies = products.map((product) => product.energy);
  const uniqueenergies=[...new Set(energies)] //filtering the array from duplicated values using Set


  const KraftstoffartOption = uniqueenergies.map((energy,index) => (
    <option key={index} value={energy}>
      {energy}
    </option>
  ));

  //////////////////////////////////////////////////////////////////////////
  const handleGetriebeOption =((event)=>{
    setGearOption(event.target.value)
  })

  const gears = products.map((product)=>product.Getriebe)
  const uniqueGears=[...new Set(gears)] //filtering the array from duplicated values using Set

  const GetriebeOption=uniqueGears.map((gear,index)=>(
    <option key={index} value={gear}>
    {gear}
  </option>
  ))


  //////////////////////////////////////////////////////////////////////////
  // const filteredProducts = products.filter(
  //   (product) =>
  //     product.price >= selectMinPrice &&
  //     product.price <= selectMaxPrice &&
  //     product.modelljahr >= minModellJahr &&
  //     product.modelljahr <= maxModellJahr
  //      &&
  //     energyOption ?product.energy === energyOption:product.energy != energyOption &&
  //     gearOption ?product.Getriebe === gearOption:product.Getriebe != gearOption
  // );
  const filteredProducts = products.filter((product) => {
    const priceInRange =
      product.price >= parseInt(selectMinPrice) &&
      product.price <= parseInt(selectMaxPrice);
    const modellJahrInRange =
      product.modelljahr >= parseInt(minModellJahr) &&
      product.modelljahr <= parseInt(maxModellJahr);
    const energyMatches =
      energyOption === "" || product.energy === energyOption;
    const gearMatches =
      gearOption === "" || product.Getriebe === gearOption;
  
    return priceInRange && modellJahrInRange && energyMatches && gearMatches;
  });
  

  return (
    <div className="product-list">
      <Container>
        <Row>
          <Col xs={3} className="product-list-left-Col">
            <div>
              <h4>Pries</h4>
              <Row>
                <Col>
                  <select
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
            <div>
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
            <div>
              <h4>Kraftstoffart</h4>
              <Row>
                <Col >
                  <select value={energyOption} onChange={handleEnergyOption}>
                    <option value="">alle</option>
                    {KraftstoffartOption}
                  </select>
                </Col>
              </Row>
            </div>
            <div>
              <h4>Getriebe</h4>
              <Row>
                <Col >
                  <select value={gearOption} onChange={handleGetriebeOption}>
                    <option value="">alle</option>
                    {GetriebeOption}
                  </select>
                </Col>
              </Row>
            </div>
            <button onClick={()=>{setGearOption(""), setEnergyOption(""),setMinModellJahr("1100"),setMaxModellJahr("5000"),setSelectMinPrice("0"),setSelectMaxPrice("1000000")}}>Clear Filter</button>
          </Col>

          <Col xs={8} className="product-list-right-Col">
            {filteredProducts.map((product) => (
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
