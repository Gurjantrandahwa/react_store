import React from "react";
import "./footer.scss";
import {Button, TextField} from "@mui/material";
import {NavLink} from "react-router-dom";
import {FaDiscord, FaFacebook, FaInstagram} from "react-icons/fa";

export default function Footer() {
    return <div className={"footer"}>
        <div className={"short-note"}>
            <div className={"short-note-text"}>
                <div>
                    <h3>Get Started</h3>
                    <h3>Let's talk today</h3>
                </div>
                <NavLink to={"/contact"}>
                    <Button variant={"contained"} size={"small"}>Contact</Button>
                </NavLink>
            </div>
        </div>
        <footer className={"footer-container grid-four-column "}>
            <div>
                <h3>Global Store</h3>
                <p>Reference site about Lorem Ipsum, giving information on its origins</p>
            </div>
            <div>
                <h3>Please subscribe to get important updates</h3>
                <form action={"#"}>
                    <TextField
                        size={"small"}
                        autoComplete={"off"}
                        margin={"dense"}
                        type={"email"}
                        placeholder={"Your e-mail"}/>

                    <div>
                        <Button
                            size={"small"}
                            sx={{
                                backgroundColor: 'orangered',
                                textTransform: "none"
                            }}
                            variant={"contained"}
                            type={"submit"}>
                            Subscribe
                        </Button>
                    </div>

                </form>
            </div>
            <div>
                <h3>Follow us on These platforms</h3>
                <div className={"socials"}>
                    {
                        [
                            {
                                icon: <FaDiscord/>
                            },
                            {
                                icon: <FaFacebook/>
                            },
                            {
                                icon: <FaInstagram/>
                            }
                        ].map((value, index) => {
                            return <div key={index} className={"footer-icons"}>
                                {value.icon}
                            </div>
                        })

                    }
                </div>


            </div>
            <div className={"caller"}>
                <h3>Call us</h3>
                <a href={"tel:1234567890"} className={"number"}>+91 1234567890</a>
            </div>


        </footer>
        <div className={"line"}/>
        <div className={"footer-bottom"}>

            <p>@ {new Date().getFullYear()} Global Store. All rights reserved</p>
            <div>
                <p>PRIVACY POLICY</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
    </div>
}