import './App.scss';
import {Container} from "@mui/material";
import Header from "./Components/Headers/Header/Header";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Searchbar from "./Components/Headers/Searchbar/Searchbar";
import Homepage from "./Components/Homepage/Homepage/Homepage";
import Products from "./Components/Products/Products";
import Login from "./Components/Login/Login";

function App() {
    return <BrowserRouter>

        <Container maxWidth={"xl"}>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Homepage/>}/>
                <Route path={"/searchbar"} element={<Searchbar/>}/>
                <Route path={"/products"} element={<Products/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path="*" element={<Navigate to={"/"}/>}/>

            </Routes>

        </Container>
    </BrowserRouter>
}

export default App;
