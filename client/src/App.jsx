import "./App.css";
import ProductList from "./components/productLists/ProductList";
import CreateProduct from "./components/createProduct/CreateProduct"
import SingleProduct from "./components/singleProduct/SingleProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <nav className="AppDiv-Nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/books">Books</NavLink>
          </nav> */}

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/:id" element={<SingleProduct />} />
        <Route path="/new" element={<CreateProduct />} />
        {/* <Route path="*" element={<NotFoud/>} />*/}
      </Routes>
      {/* <CreateProduct/> */}
    </BrowserRouter>
  );
}

export default App;
