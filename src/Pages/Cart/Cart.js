import React from "react";
import {useCartContext} from "../../Common/Context/cart_context";
import "./cart.scss";
import {Alert, Box, Button, Divider, Typography} from "@mui/material";
import CartData from "../../Components/CartData/CartData";
import {NavLink} from "react-router-dom";
import FormatPrice from "../../Common/Helpers/FormatPrice";

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
    return <div className={"cart-container"}>
        <div className={"cart-data-wrapper"}>
            <div className={"cart-header"}>
                {[
                    {name: "Product"},
                    {name: "Price"},
                    {name: "Quantity"},
                    {name: "Subtotal"},
                    {name: ""}
                ].map(((value, index) => {
                    return <Typography

                        variant={"h5"}
                        key={index}
                    >
                        {value.name}
                    </Typography>
                }))
                }
            </div>
            {
                cart.map((curElem) => {
                    return <CartData
                        key={curElem.id}
                        {...curElem}/>
                })


            }
            <div className={"cart-buttons-wrapper"}>
                <NavLink to={"/products"}>
                    <Button variant={"contained"}
                            className={"shopping-btn"}
                    >
                        Continue shopping
                    </Button>
                </NavLink>
                <NavLink to={"/products"}>
                    <Button variant={"outlined"}
                            className={"update-btn"}
                    >
                        Update cart
                    </Button>
                </NavLink>
                <Button
                    className={"clear-btn"}
                    onClick={() => clearCart()}
                    variant={"outlined"}>
                    Clear Cart
                </Button>
            </div>
        </div>
        <div className={"cart-subtotal-data"}>
            <div className={"cart-subtotal-data-header"}>
                <Typography>Cart total</Typography>
            </div>
            <div className={"cart-subtotal"}>
                <div className={"total-price"}>
                    <Typography>
                        Sub Total
                    </Typography>
                    <Typography>
                        <FormatPrice price={total_price}/>
                    </Typography>
                </div>
                {/*<Divider color={"#BDBDBD"}/>*/}
                <div className={"total-price"}>
                    <Typography>
                        Shipping Fee
                    </Typography>
                    <Typography>
                        <FormatPrice price={shipping_fee}/>
                    </Typography>

                </div>
                <div className={"coupon-input"}>
                    <input
                        placeholder={"Enter coupon code"}
                    />
                    <Button>Apply</Button>
                </div>
                <Divider color={"#BDBDBD"}/>
                <div className={"total-amount"}>
                    <Typography>
                         Total amount
                    </Typography>
                    <Typography>
                        <FormatPrice price={shipping_fee + total_price}/>
                    </Typography>
                </div>
                <Divider color={"#BDBDBD"}/>
                <Button className={"checkout-btn"}>Proceed to checkout</Button>
            </div>


        </div>

    </div>
}