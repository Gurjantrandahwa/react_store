import React from "react";
import {useCartContext} from "../../Common/Context/cart_context";
import "./cart.scss";
import {Alert, Box, Button, Divider, Paper, Typography} from "@mui/material";
import CartData from "../../Components/CartData/CartData";
import {NavLink} from "react-router-dom";
import FormatPrice from "../../Helpers/FormatPrice";

export default function Cart() {
    const {cart, clearCart, total_price, shipping_fee} = useCartContext();


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

        <Box sx={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "40px"
        }}>
            <Paper sx={{
                width: 250,
                height: 150,
                backgroundColor: "lightgrey",
                color: "black",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px"
            }}>
                <Typography variant={"body1"}>Sub Total: <FormatPrice price={total_price}/></Typography>
                <Typography variant={"body1"}>Shipping Fee: <FormatPrice price={shipping_fee}/></Typography>

                <Divider variant={"fullWidth"} color={"secondary"}/>
                <Typography variant={"body1"}>Order Total:
                    <FormatPrice price={shipping_fee + total_price}/></Typography>

            </Paper>
        </Box>

    </div>
}