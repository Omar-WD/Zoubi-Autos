import "./App.css";
import ProductList from "./components/productLists/ProductList";
import CreateProduct from "./components/createProduct/CreateProduct"
import SingleProduct from "./components/singleProduct/SingleProduct";
import NavBar from "./components/navbar.jsx/NavBar"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Signin from "./components/signin/Signin";
import AuthProvider from './context/AuthProvider';
import ProtectedRoutes from "./ProtectedRoutes";
import PageNotFound from "./components/pageNotFound/PageNotFound";

function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
    
      <NavBar/>
      <Routes>
        <Route path="/gebrauchwagen" element={<ProductList />} />
        <Route path="/:id" element={<SingleProduct />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Kontakt" element={<Contact />} />
        <Route path="/new" element={<ProtectedRoutes />}>
        <Route index element={<CreateProduct />} />
        </Route>
        <Route path="/" element={<Services />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <div style={{position:"absolute",width:"100%",marginTop:"100px",color:"lightGray", textAlign:"center"}}>
      <p style={{lineHeight:"5px", fontSize:"11px"}}>Copyright © 2023 - All Right Reserved.</p>
      <p style={{lineHeight:"5px", fontSize:"11px"}}>Designed & developed by <span style={{color:"white",fontWeight:"bold"}}>Omar Al Zoubi</span></p>
      </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
