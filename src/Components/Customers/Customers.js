import React from "react";
import "./Customers.scss";
import {Typography} from "@mui/material";

export default function Customers() {
    return <div>
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
                    image: "https://i.pinimg.com/564x/85/25/83/852583511c3109d7a4efa0c3a233be1e.jpg",
                    name: "Savannah Nguyen",
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
                return <div key={index}>
                    <div>
                        <img src={value.image} alt={""}/>
                        <Typography>{value.name}</Typography>
                    </div>
                    <div>
                        <Typography>
                            {value.description}
                        </Typography>
                    </div>
                </div>
            })

        }
    </div>
}