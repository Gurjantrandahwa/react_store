import React from "react";
import "./SeachContact.scss";
import {FaFacebookF} from "react-icons/fa";
import {TiSocialTwitter} from "react-icons/ti";
import {AiFillLinkedin, AiOutlineInstagram} from "react-icons/ai";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {Button, IconButton} from "@mui/material";
export default function SearchContact() {
    return <div className={"searchContact"}>
        <div>
            <h2> Connect with us</h2>
            <p>We're always looking to connect with those who
                share an interest in a sustainable future.
            </p>
                <div className={"icons"}>
                <FaFacebookF/>
                <TiSocialTwitter/>
                <AiFillLinkedin/>
                <AiOutlineInstagram/>
            </div>
        </div>
        <div className={"right"}>
            <h2>Contact us</h2>
            <p>
                Get in touch with PLC and specialist teams in our headquarters,
                or find contacts around the world.
            </p>
            <Button>Contact us</Button>
            <IconButton>
                <ArrowRightIcon className={"icon-btn"}/>
            </IconButton>
        </div>
    </div>
}