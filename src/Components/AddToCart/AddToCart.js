import React, {useState} from "react";
import "./AddToCart.scss";
import {Button, Typography} from "@mui/material";
import {FaCheck} from "react-icons/fa";

export default function AddToCart({product}) {
    const {id, colors, stock} = product;
    const [color, setColor] = useState(colors[0])
    return <div>

        <Typography variant={"body1"} className={"colors"}>
            Colors:
            {
                colors.map((curColor, index) => {
                    return <button key={index}
                                   style={{backgroundColor: curColor}}
                                   className={color === curColor ? "color-btn color-btn-active" : "color-btn"}
                                   onClick={() => {
                                       setColor(curColor)
                                   }}>
                        {color === curColor ? <FaCheck/> : null}
                    </button>
                })
            }
        </Typography>
    {/*Add to cart*/}
        <div>

        </div>

    </div>
}