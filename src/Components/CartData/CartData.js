import React from "react";
import {Divider, IconButton, Typography} from "@mui/material";
import FormatPrice from "../../Common/Helpers/FormatPrice";
import CartAmount from "../CartAmount/CartAmount";
import {useCartContext} from "../../Common/Context/cart_context";
import "./CartData.scss";
import {AiOutlineClose} from "react-icons/ai";

export default function CartData({id, name, image, color, price, amount}) {
    const {removeItem, setIncrease, setDecrease} = useCartContext();

    return <div>
        <div className={"cart-product-details"}>
            <div className={"cart-image-name"}>

                <img src={image} alt={id}/>
                <div>
                    <Typography variant={"h6"}>{name}</Typography>
                    <div style={{display: "flex"}}>
                        <Typography> Color :</Typography>
                        <div
                            className={"color-style"}
                            style={{backgroundColor: color}}/>
                    </div>
                </div>

            </div>
            <div style={{width:100}}>
                <FormatPrice price={price}/>
            </div>
            <div>
                <CartAmount amount={amount}
                            setIncrease={() => setIncrease(id)}
                            setDecrease={() => setDecrease(id)}/>
            </div>
            <div>
                <FormatPrice price={price * amount}/>

            </div>
            <div className={"delete-btn"}>

                <IconButton

                    onClick={() => removeItem(id)}>
                    <AiOutlineClose/>
                </IconButton>
            </div>
        </div>
        <Divider color={"#BDBDBD"}/>
    </div>
}