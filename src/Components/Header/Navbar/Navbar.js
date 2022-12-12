import React from "react";
import "./navbar.scss";
import {NavLink} from "react-router-dom";
import {FiShoppingCart} from "react-icons/fi";
import {CgClose, CgMenu} from "react-icons/cg";

export default function Navbar() {
    return <nav>

        <div className={"navbar active"}>
            <ul className={"nav-lists"}>
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
                    <NavLink to={"/cart"} className={"cart-link"}>
                        <FiShoppingCart className={"cart-trolley"}/>
                        <span className={"cart-value"}>10</span>
                    </NavLink>
                </li>
            </ul>

            {/*mobile*/}
            <div className={"mobile-navbar-icon"}>
                <CgMenu name={"menu-outline"} className={"menu-icon"}/>
                <CgClose name={"close-outline"} className={"menu-icon close-icon"}/>
            </div>
        </div>
    </nav>
}