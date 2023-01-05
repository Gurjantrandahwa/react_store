import React from "react";
import {useCartContext} from "../../Common/Context/cart_context";
import "./cart.scss";
import {Alert, Divider, Typography} from "@mui/material";
import CartData from "../../Components/CartData/CartData";

export default function Cart() {
    const {cart} = useCartContext();
    console.log(cart, "cartdata")

    // if (cart){
    //     return <Alert severity={"error"}>Your cart is empty</Alert>
    // }
    return <div className={"container cart-container"}>
        <div className={"cart-data"}>
            <Typography variant={"h5"} color={"secondary"}>Name</Typography>
            <Typography variant={"h5"} color={"secondary"} className={"hide"}>Price</Typography>
            <Typography variant={"h5"} color={"secondary"}>Quantity</Typography>
            <Typography variant={"h5"} color={"secondary"} className={"hide"}>Subtotal</Typography>
            <Typography variant={"h5"} color={"secondary"}>Remove</Typography>

        </div>
        <Divider variant={"fullWidth"} color={"primary"}/>
        <div style={{marginBottom:"50px"}}>
            {
                cart.map((curElem) => {
                    return <CartData
                        key={curElem.id}
                        {...curElem}/>
                })
            }
        </div>
    </div>
}