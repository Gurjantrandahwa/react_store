import React from "react";
import "./TakeAction.scss";
import {Button} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function TakeAction() {
    return <div className={"take-action"}>
        <div className={"left"}>
            <h1>
                <span className={"color1"}>millions of people</span>
                <span className={"color2"}> in 190 countries</span>
                <span className={"color3"}> use our brands every day.</span>
            </h1>
            <Button>Explore the brands</Button>
            <Button ><ArrowRightIcon className={"icon-button"}/></Button>
        </div>
        <div className={"centre"}>
            <div className={"box"}>
                <img src={"https://i.pinimg.com/474x/f7/65/22/f76522d35e682004272b1b9871c62062.jpg"} alt={"video"}/>
                <div className={"box-text"}>
                    <h3>Take Action now!</h3>
                    <p>Let’s change the world for the better, together.</p>
                </div>

            </div>
        </div>
        <div className={"take-action-right"}>
            <h1>
                <span className={"color1"}> Ground-breaking innovations</span>
                <span className={"color2"}> with more than</span>
                <span className={"color3"}> 10,000 patents.</span>


            </h1>
            <Button>Read our innovations</Button>
            <Button ><ArrowRightIcon className={"icon-button"}/></Button>
        </div>
    </div>
}