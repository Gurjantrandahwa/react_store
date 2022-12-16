import React from "react";
import "./heroSection.scss";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

export default function HeroSection({myData}) {
    const {name,image}=myData
    return <div className={"container"}>
        <div className={"hero-wrapper"}>
            <div className={"hero-wrapper-data"}>
                <p className={"intro-data"}>Welcome to</p>
                <h1>{name}</h1>
                <p>Lorem ipsum is placeholder text commonly used in
                    the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                </p>
                <NavLink to={"/products"}>
                    <Button variant={"contained"}
                    sx={{
                        backgroundColor:"orangered"
                    }}>
                        Shop now
                    </Button>
                </NavLink>
            </div>
            <div className={"hero-img"}>
                <img src={image}
                     alt={"hero-image"}/>
            </div>
        </div>
    </div>
}
