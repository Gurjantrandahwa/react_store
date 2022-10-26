import React, {useState} from "react";
import img from "./img.png"
import {AppBar, Box} from "@mui/material";
import "./header.scss";
import PublicIcon from '@mui/icons-material/Public';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";


export default function Header() {

    return <div>
        <Box sx={{flexGrow: 1}}>
            <AppBar className={"header"}>
                <div className={"logo-wrapper"}>
                    <Link to={"/"}>
                        <img src={img} className={"logo"} alt={"logo"}/>
                    </Link>

                    <div className={"header-right"}>
                        <Link to={"/products"}>
                            <div className={"location-wrapper"}>
                                <PublicIcon fontSize={"large"}/>
                                <p>Products</p>
                            </div>
                        </Link>

                        <Link to={"/searchbar"}>
                            <div className={"search-wrapper"}>
                                <SearchIcon className={"icon-button"}/><p>Search</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </AppBar>
        </Box>
    </div>
}