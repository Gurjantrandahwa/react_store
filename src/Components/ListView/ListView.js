import React from "react";
import "./listView.scss";
import {Typography} from "@mui/material";

export default function ListView({products}) {
    return <div>
        {
            products.map((value, index) => {
                return <div className={"list-view-card"} key={index}>
                    <figure>
                        <img src={value.image} width={200} alt={value.name}/>
                    </figure>

                    <div>
                        <Typography variant={"h5"}
                                    color={"mediumvioletred"}>
                            {value.name}
                        </Typography>
                        {value.description}
                    </div>

                </div>
            })
        }
    </div>
}