import React from "react";
import "./header.scss";
import {NavLink} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import img from "./img.png"
import {Button} from "@mui/material";
import {FiShoppingCart} from "react-icons/fi";

export default function Header() {
    return <div className={"header"}>
        <NavLink to={"/"}>
            <img src={img}
                 className={"logo"}
                 alt={"logo"}
            />
        </NavLink>
        <Navbar/>
<div className={"right-side"}>
    <NavLink to={"/login"}>
        <Button size={"small"}
                sx={{
                    backgroundColor: "orangered",
                    textTransform: "none"
                }}
                variant={"contained"}>Login</Button>
    </NavLink>
    <NavLink to={"/cart"} className={"cart-link"}>
        <FiShoppingCart className={"cart-trolley"}/>
        <span className={"cart-value"}>10</span>
    </NavLink>
</div>

    </div>
}