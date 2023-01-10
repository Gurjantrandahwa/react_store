import React from "react";
import "./footer.scss";
import {Divider, IconButton, Typography} from "@mui/material";
import {FaFacebook, FaGoogle, FaInstagram} from "react-icons/fa";
import {FiSend} from "react-icons/fi";
import {CiHeadphones} from "react-icons/ci";
import {NavLink} from "react-router-dom";

export default function Footer() {
    return <div className={"footer"}>
        {/*newsletter*/}
        <div className={"newsletter"}>
            <Typography variant={"h6"}>Subscribe newsletter</Typography>
            <div className={"newsletter-email"}>
                <input type={"text"}
                       placeholder={"Email address"}/>
                <IconButton>
                    <FiSend/>
                </IconButton>

            </div>
            <div className={"footer-contact"}>
                <CiHeadphones/>
                <div>
                    <Typography>Call us 24/7 :</Typography>
                    <Typography>(+91) 0123 456 789</Typography>
                </div>
            </div>
        </div>
        {/* footer*/}

        <footer>
            {/*logo*/}
            <div className={"footer-logo-wrapper"}>
                <NavLink to={"/"}>
                    <img src={"https://i.pinimg.com/564x/73/8c/66/738c66a1e117f638020803ff8c6a6575.jpg"}
                         alt={"logo"}/>
                    <Typography variant={"h6"}>Global Store</Typography>

                </NavLink>
                <div>
                    <Typography>
                        123 street jammy
                    </Typography>
                    <Typography>howards, xyz</Typography>
                </div>

                <Divider color={"lightgray"}/>
                <div className={"footer-icons"}>
                    {
                        [
                            {
                                icon: <FaGoogle/>
                            },
                            {
                                icon: <FaFacebook/>
                            },
                            {
                                icon: <FaInstagram/>
                            },
                        ].map( (value, index) => {
                            return<div key={index}>
                               <IconButton>
                                   {value.icon}
                               </IconButton>
                            </div>
                        })
                    }
                </div>
            </div>

            <div className={"footer-list"}>
                {
                    [
                        {
                            header:"Find product",
                            list:<ul>
                                <li>Smart mobiles</li>
                                <li>Smart watches</li>
                                <li>Unique laptops</li>
                                <li>Electronics</li>
                                <li>Automatic Screens</li>
                            </ul>
                        },
                        {
                            header:"Get help",
                            list:<ul>
                                <li>About us</li>
                                <li>Contact us</li>
                                <li>Return policy</li>
                                <li>Privacy policy</li>
                                <li>Payment policy</li>
                            </ul>
                        },
                        {
                            header:"About us",
                            list:<ul>
                                <li>News</li>
                                <li>Service</li>
                                <li>Our policy</li>
                                <li>Customer care</li>
                                <li>Faq's</li>
                            </ul>
                        },
                    ].map( (value, index) => {
                        return<div key={index}>
                            <Typography variant={"h6"}>{value.header}</Typography>
                            <div>{value.list}</div>
                        </div>
                    })
                }
            </div>
        </footer>
    </div>
}