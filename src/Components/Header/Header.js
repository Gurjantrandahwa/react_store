import React from "react";
import "./header.scss";
import {NavLink} from "react-router-dom";
import Navbar from "./Navbar/Navbar";


export default function Header() {
    return <div className={"header"}>
    <NavLink to={"/"}>
        <img src={"https://i.pinimg.com/564x/be/05/07/be050733fe44a12d59275625bb17a87a.jpg"}
             className={"logo"}
             alt={"logo"}/>
    </NavLink>
    <Navbar/>



    </div>
}