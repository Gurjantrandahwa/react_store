import React from "react";
import "./Brands.scss";
import {Typography} from "@mui/material";
import {GoShield} from "react-icons/go";
import {FaCrown} from "react-icons/fa";
import {SiHackthebox} from "react-icons/si";

export default function Brands() {
    return <div className={"brand"}>
        <div className={"brands-wrapper"}>

            {
                [
                    {
                        image: <SiHackthebox/>,
                        header: "Free delivery",
                        description: "on order above ₹999.00"
                    },
                    {
                        image: <FaCrown/>,
                        header: "Best quality",
                        description: "best quality in low price"
                    },
                    {
                        image: <GoShield/>,
                        header: "1 year warranty ",
                        description: "Available warranty"
                    },

                ].map((value, index) => {
                    return <div key={index} className={"single-brand"}>
                        <div>   {value.image}</div>

                        <div className={"brand-data"}>
                            <Typography variant={"h6"}>{value.header}</Typography>
                            <Typography>{value.description}</Typography>
                        </div>
                    </div>
                })
            }

        </div>

    </div>
}