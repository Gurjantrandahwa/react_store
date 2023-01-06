import React from "react";
import {useCartContext} from "../../Common/Context/cart_context";
import "./cart.scss";
import {Alert, Box, Button, Divider, Typography} from "@mui/material";
import CartData from "../../Components/CartData/CartData";
import {NavLink} from "react-router-dom";

export default function Cart() {
    const {cart, clearCart} = useCartContext();

    if (cart.length === 0) {
        return <Box sx={{
            margin: "100px", display: "flex", flexDirection: "column", alignItems: "center",
            gap: "30px"
        }}>
            <Alert
                sx={{textTransform: "capitalize"}}
                variant={"outlined"} severity={"warning"}
            >
                No Items in cart click on the button for continuing shopping
            </Alert>
            <NavLink to={"/products"}>
                <Button variant={"contained"} color={"secondary"}>
                    Continue shopping
                </Button>
            </NavLink>

        </Box>
    }
    return <div className={"container cart-container"}>
        <div className={"cart-data"}>
            {[
                {name: "Name"},
                {name: "Price"},
                {name: "Quantity"},
                {name: "Subtotal"},
                {name: "Remove"}
            ].map(((value, index) => {
                return <Typography
                    maxWidth={"100px"}
                    variant={"h5"}
                    key={index}
                    color={"secondary"}>
                    {value.name}
                </Typography>
            }))
            }


        </div>
        <Divider variant={"fullWidth"} color={"primary"}
                 sx={{margin: "20px"}}/>
        <div style={{marginBottom: "50px"}}>
            {
                cart.map((curElem) => {
                    return <CartData
                        key={curElem.id}
                        {...curElem}/>
                })
            }
        </div>
        <Divider color={"secondary"} sx={{margin: "20px"}}/>
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                margin: "30px"
            }}>
            <NavLink to={"/products"}>
                <Button variant={"contained"} color={"secondary"}>
                    Continue shopping
                </Button>
            </NavLink>
            <Button
                onClick={() => clearCart()}
                variant={"contained"} color={"error"}>
                Clear Cart
            </Button>
        </Box>

    </div>
}