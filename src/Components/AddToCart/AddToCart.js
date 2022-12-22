import React from "react";
import "./AddToCart.scss";
import {Button, Typography} from "@mui/material";

export default function AddToCart({product}) {
    const {id,colors,stock}=product;

    return <div>
    <div className={"colors"}>
        <Typography variant={"body1"}>
            Colors:
            {
                colors.map((color,index)=>{
                    return<Button key={index}
                    style={{backgroundColor:color}}>
                        {color}
                    </Button>
                })
            }
        </Typography>

    </div>
    </div>
}