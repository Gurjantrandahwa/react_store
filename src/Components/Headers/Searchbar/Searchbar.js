import React from "react";
import "./seachbar.scss";
import {AppBar, Box, Button, Toolbar} from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {Link} from "react-router-dom";
import SearchContact from "../SearchContact/SearchContact";
import Footer from "../../Footer/Footer";

export default function Searchbar() {
    return <div className={"searchbar"}>
        <Box sx={{flexGrow: 1}}>
            <AppBar >
                <Toolbar>
                    <Link to={"/"}>
                        <p>Home</p>
                    </Link>
                    <ArrowRightIcon sx={{color: "skyblue"}}/>
                    <p>Search</p>
                </Toolbar>
            </AppBar>
        </Box>
        <div className={"searchbar-wrapper"}>
            <h1>Search</h1>

            <form>
                <input className={""}
                       placeholder={"search here... "}/>
                <Button>Search</Button>
            </form>

        </div>

        <SearchContact/>
        <Footer/>

    </div>
}