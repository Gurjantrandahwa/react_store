import React from "react";
import "./header.scss";
import {NavLink} from "react-router-dom";
import Navbar from "./Navbar/Navbar";


export default function Header() {
    return <div className={"header"}>
    <NavLink to={"/"}>
        <img src={"https://i.pinimg.com/564x/78/9e/89/789e89d2418c4b1a4190627eda0db1cc.jpg"}
             className={"logo"}
             alt={"logo"}/>
    </NavLink>
    <Navbar/>



    </div>
}