import React from "react";
import "./header.scss";
import Navbar from "../Navbar/Navbar";
import {Typography} from "@mui/material";
import {FiMapPin} from "react-icons/fi";
import {BsTruck} from "react-icons/bs";
import Search from "../Search/Search";
import {NavLink} from "react-router-dom";

export default function Header() {
    return<div>
        <div className={"header"}>
            <div>
                <a href={"tel:1234567890"}>
                    <Typography>
                        Need help? Call us: (+91) 1234567890
                    </Typography>
                </a>

            </div>
            <div className={"right-header-wrapper"}>
                {
                    [
                        {
                            icon: <FiMapPin/>,
                            detail: <NavLink to={"/contact"}>Our Store</NavLink>
                        },
                        {
                            icon: <BsTruck/>,
                            detail: "Track your order"
                        }
                    ].map((value, index) => {
                        return<div key={index} className={"right-header"}>
                            {value.icon}
                            <Typography>{value.detail}</Typography>
                        </div>
                    })
                }
            </div>
    </div>
        <Search/>
        <Navbar/>
    </div>
}