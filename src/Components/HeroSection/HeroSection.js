import React from "react";
import "./heroSection.scss";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

export default function HeroSection() {

    return <div className={"container"}>
        <div className={"hero-wrapper"}>

            <div className={"hero-wrapper-data"}>
                <h1>This is a Global Store</h1>
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
            {/*<div className={"hero-img"}>*/}
            {/*    <figure>*/}
            {/*        <img src={"https://i.pinimg.com/564x/73/81/3b/73813bf6b6ab4d402cc3d5bcfe9809a7.jpg"}*/}
            {/*             alt={"hero-image"}/>*/}
            {/*        <figcaption className={"online"}>*/}
            {/*            <p>*/}
            {/*                Here*/}
            {/*            </p>You can*/}
            {/*            <p>shop online</p>*/}
            {/*        </figcaption>*/}
            {/*    </figure>*/}

            {/*</div>*/}
        </div>
    </div>
}
//https://pliki.dlahandlu.pl/i/04/64/82/046482_r0_940.jpg