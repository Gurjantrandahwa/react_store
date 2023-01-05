import React, {useState} from "react";
import {IconButton, Typography} from "@mui/material";
import FormatPrice from "../../Helpers/FormatPrice";
import CartAmount from "../CartAmount/CartAmount";
import {FaTrash} from "react-icons/fa";
import {useCartContext} from "../../Common/Context/cart_context";

export default function CartData({id, name, image, color, price, amount}) {
    const {removeItem} = useCartContext();
    const setDecrease = () => {
        // amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setIncrease = () => {
        // amount < stock ? setAmount(amount + 1) : setAmount(stock);


    }
    return <div className={"cart-data"}>
        <div>
            <div>
                <figure>
                    <img src={image} alt={id} width={50}/>
                </figure>
                <Typography variant={"subtitle1"}>{name}</Typography>
                <div style={{display: "flex"}}>
                    <Typography> Color: </Typography>
                    <div
                        className={"color-style"}
                        style={{backgroundColor: color}}/>
                </div>

            </div>
        </div>
        <div className={"hide"}>
            <FormatPrice price={price}/>
        </div>
        <div>
            <CartAmount amount={amount}
                        setIncrease={setIncrease}
                        setDecrease={setDecrease}/>
        </div>
        <div className={"hide"}>
            <FormatPrice price={price * amount}/>

        </div>
        <div>
            <IconButton onClick={()=>removeItem(id)}>
                <FaTrash
                    size={24}
                    color={"red"}/>
            </IconButton>

        </div>
    </div>
}