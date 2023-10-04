import "./App.css";
import ProductList from "./components/productLists/ProductList";
import CreateProduct from "./components/createProduct/CreateProduct"
import SingleProduct from "./components/singleProduct/SingleProduct";
import NavBar from "./components/navbar.jsx/NavBar"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Services from "./components/services/Services";

function App() {
  return (
    <BrowserRouter>
    
      <NavBar/>
      <Routes>
        <Route path="/gebrauchwagen" element={<ProductList />} />
        <Route path="/:id" element={<SingleProduct />} />
        <Route path="/new" element={<CreateProduct />} />
        <Route path="/home" element={<Services />} />
        {/* <Route path="*" element={<NotFoud/>} />*/}
      </Routes>
      {/* <CreateProduct/> */}
    </BrowserRouter>
  );
}

export default App;
