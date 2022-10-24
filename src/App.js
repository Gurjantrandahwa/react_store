import './App.scss';
import {Container} from "@mui/material";
import Header from "./Components/Headers/Header/Header";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Searchbar from "./Components/Headers/Searchbar/Searchbar";
import Homepage from "./Components/Homepage/Homepage/Homepage";

function App() {
    return <BrowserRouter>

        <Container maxWidth={"xl"}>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Homepage/>}/>
                <Route path={"/searchbar"} element={<Searchbar/>}/>
                <Route path="*" element={<Navigate to={"/"}/>}/>
            </Routes>

        </Container>
    </BrowserRouter>
}

export default App;
