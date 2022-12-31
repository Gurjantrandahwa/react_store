import React from "react";
import "./header.scss";
import {NavLink} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import img from "./img.png"

export default function Header() {
    return <div className={"header"}>
        <NavLink to={"/"}>
            <img src={img}
                 className={"logo"}
                 alt={"logo"}
            />
        </NavLink>
        <Navbar/>


    </div>
}