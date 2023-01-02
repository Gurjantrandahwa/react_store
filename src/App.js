import Header from "./Components/Header/Header";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Products from "./Pages/Products/Products";
import Login from "./Pages/Login/Login";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Cart from "./Pages/Cart/Cart";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Footer from "./Components/Footer/Footer";
import {Container} from "@mui/material";

function App() {
    return <BrowserRouter>
        {/*<Container maxWidth={"xl"}>*/}
            <Header/>
            <Routes>
                <Route path={"/"} element={<Homepage/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/products"} element={<Products/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
                <Route path={"/singleProduct/:id"} element={<SingleProduct/>}/>
                <Route path={"/cart"} element={<Cart/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path="*" element={<ErrorPage/>}/>

            </Routes>
            <Footer/>
        {/*</Container>*/}


    </BrowserRouter>
}

export default App;
