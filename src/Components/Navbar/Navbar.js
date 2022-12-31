import React, {useState} from "react";
import "./navbar.scss";
import {NavLink} from "react-router-dom";
import {FiShoppingCart} from "react-icons/fi";
import {CgClose, CgMenu} from "react-icons/cg";
import {Button} from "@mui/material";

export default function Navbar() {
    const [menuIcon, setMenuIcon] = useState()
    return <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className={"nav-lists"} onClick={() => setMenuIcon(false)}>
            <li>
                <NavLink to={"/"}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to={"/about"}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to={"/products"}>
                    Products
                </NavLink>
            </li>
            <li>
                <NavLink to={"/contact"}>
                    Contact
                </NavLink>
            </li>

            <li>
                <NavLink to={"/login"}>
                    <Button
                            className={"login-button"}
                            variant={"contained"}>
                        Login
                    </Button>
                </NavLink>
            </li>
            <li>
                <NavLink to={"/cart"} className={"cart-link"}>
                    <FiShoppingCart className={"cart-trolley"}/>
                    <span className={"cart-value"}>10</span>
                </NavLink>
            </li>
        </ul>

        {/*mobile*/}
        <div className={"mobile-navbar-btn"}>
            <CgMenu name={"menu-outline"} className={"menu-icon"}
                    onClick={() => setMenuIcon(true)}/>
            <CgClose name={"close-outline"}
                     className={"menu-icon close-icon"}
                     onClick={() => setMenuIcon(false)}/>
        </div>
    </div>

}