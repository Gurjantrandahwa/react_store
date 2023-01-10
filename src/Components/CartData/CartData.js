import React from "react";
import {IconButton, Typography} from "@mui/material";
import FormatPrice from "../../Common/Helpers/FormatPrice";
import CartAmount from "../CartAmount/CartAmount";
import {FaTrash} from "react-icons/fa";
import {useCartContext} from "../../Common/Context/cart_context";

export default function CartData({id, name, image, color, price, amount}) {
    const {removeItem, setIncrease, setDecrease} = useCartContext();

    return <div className={"cart-data"}>
        <div style={{width: "100px"}}>
            <div>
                <figure>
                    <img src={image} alt={id} width={50}/>
                </figure>
                <Typography variant={"subtitle1"}>{name}</Typography>
                <div style={{display: "flex"}}>
                    <Typography> Color : </Typography>
                    <div
                        className={"color-style"}
                        style={{backgroundColor: color,marginLeft:"5px"}}/>
                </div>

            </div>
        </div>
        <div className={"hide"} style={{width: "100px"}}>
            <FormatPrice price={price}/>
        </div>
        <div style={{width: "170px"}}>
            <CartAmount amount={amount}
                        setIncrease={() => setIncrease(id)}
                        setDecrease={() => setDecrease(id)}/>
        </div>
        <div className={"hide"} style={{width: "100px"}}>
            <FormatPrice price={price * amount}/>

        </div>
        <div style={{width: "100px"}}>
            <IconButton onClick={() => removeItem(id)}>
                <FaTrash
                    size={24}
                    color={"red"}/>
            </IconButton>

        </div>
    </div>
}