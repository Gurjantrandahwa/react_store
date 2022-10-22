import React from "react";
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
                        <div className={"location-wrapper"}>
                            <PublicIcon/>
                            <p>A Global Store {"  "}
                                <span>
                                   Change Location
                               </span>
                            </p>
                        </div>
                        <Link to={"/searchbar"}>
                            <div className={"search-wrapper"}>
                                <SearchIcon/><p>Search</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </AppBar>
        </Box>
    </div>
}