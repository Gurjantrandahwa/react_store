import React from "react";
import "./heroSection.scss";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

export default function HeroSection() {

    return <div className={"hero-wrapper"}
                style={{
                    backgroundImage: `url("https://freepngimg.com/download/abstract/125638-abstract-graphic-design-free-png-hq.png")`,
                }}>
        <div className={"hero-wrapper-data"}>
            <h1>Global Store</h1>
            <p>
                Here you can buy things as your preference.
            </p>
            <NavLink to={"/products"}>
                <Button variant={"contained"}>
                    Shop now
                </Button>
            </NavLink>
        </div>
        <div className={"hero-img"}>
            <figure>
                <img src={"https://i.pinimg.com/564x/73/81/3b/73813bf6b6ab4d402cc3d5bcfe9809a7.jpg"}
                     alt={"hero-image"}/>
                <figcaption className={"caption"}>Here Yo can learn and buy <br/>many things</figcaption>
            </figure>

        </div>
    </div>

}
//https://pliki.dlahandlu.pl/i/04/64/82/046482_r0_940.jpg