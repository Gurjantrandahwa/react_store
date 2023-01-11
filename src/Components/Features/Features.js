import React from "react";
import "./Features.scss";
import {Button, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

export default function Features() {
    return <div className={"features-wrapper"}>
        <figure>
            <img src={"https://i.pinimg.com/564x/cd/fb/45/cdfb45fcf0c4908c839bc750dd39ec57.jpg"} alt={""}/>
            <figcaption className={"caption-button"}>
                <Button>
                    New laptop
                </Button>
                <Typography variant={"h5"}>
                    Sale up to 50% off
                </Typography>
                <Typography>
                    12 inch hd display
                </Typography>
                <NavLink to={"/products"}>
                    <Button>
                        Shop now
                    </Button>
                </NavLink>

            </figcaption>
        </figure>

    </div>
}