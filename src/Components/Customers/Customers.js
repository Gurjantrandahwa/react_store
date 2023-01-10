import React from "react";
import "./Customers.scss";
import {Typography} from "@mui/material";

export default function Customers() {
    return <div className={"customer-wrapper"}>
        {
            [
                {
                    image: "https://i.pinimg.com/564x/48/6c/a0/486ca00640b169300b48e9ceacd8e401.jpg",
                    name: "Savannah Nguyen",
                    description: "Lorem ipsum dolor sit amet consectetur. " +
                        "Nec sit enim tellus faucibus bibendum ullamcorper. " +
                        "Phasellus tristique aenean at lorem sed scelerisque.",

                },
                {
                    image: "https://i.pinimg.com/564x/f2/59/37/f2593750b80bb40b57d248b0a6f7ecc5.jpg",
                    name: "Esther Howard",
                    description: "Lorem ipsum dolor sit amet consectetur. " +
                        "Nec sit enim tellus faucibus bibendum ullamcorper. " +
                        "Phasellus tristique aenean at lorem sed scelerisque.",

                },
                {
                    image: "https://i.pinimg.com/564x/a7/80/80/a7808059330f062de8a90e844d0558d1.jpg",
                    name: "Savannah Nguyen",
                    description: "Lorem ipsum dolor sit amet consectetur. " +
                        "Nec sit enim tellus faucibus bibendum ullamcorper. " +
                        "Phasellus tristique aenean at lorem sed scelerisque.",

                },

            ].map((value, index) => {
                return <div key={index} className={"customer-card"}>
                    <div className={"customer-name"}>
                        <img src={value.image} alt={""}/>
                        <Typography>{value.name}</Typography>
                    </div>
                    <div className={"customer-description"}>
                        <Typography>
                            {value.description}
                        </Typography>
                    </div>
                </div>
            })

        }
    </div>
}