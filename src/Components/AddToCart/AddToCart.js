import React, {useState} from "react";
import "./AddToCart.scss";
import {Alert, Button, Divider, Typography} from "@mui/material";
import {FaCheck} from "react-icons/fa";
import CartAmount from "../CartAmount/CartAmount";
import {NavLink} from "react-router-dom";
import {useCartContext} from "../../Common/Context/cart_context";

export default function AddToCart({product}) {
    const {addToCart}=useCartContext();

    const {id, colors, stock} = product;
    const [color, setColor] = useState(colors[0])
    const [amount, setAmount] = useState(1)


    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);


    }

    return <div className={"cart"}>
        <div className={"cart-colors"}>
            <Typography>
                Color :
            </Typography>
            {
                colors.map((curColor, index) => {
                    return <button key={index}
                                   style={{backgroundColor: curColor}}
                                   className={color === curColor ? "cart-color-btn cart-color-btn-active" : "cart-color-btn"}
                                   onClick={() => {
                                       setColor(curColor)
                                   }}>

                    </button>
                })
            }
        </div>


        {/*Add to cart*/}
        <div className={"quantity-wrapper"}>
            <Typography>Quantity :</Typography>
            <div>
                <CartAmount
                    amount={amount}
                    setDecrease={setDecrease}
                    setIncrease={setIncrease}/>
            </div>

        </div>
        <div className={"add-cart-buttons"}>
            <NavLink to={"/cart"}
                     onClick={() => addToCart(id, color, amount, product)}
            >
                <Button>
                    Add To cart
                </Button>
            </NavLink>
            <NavLink to={"/cart"}
                     onClick={() => addToCart(id, color, amount, product)}
            >
                <Button>
                   Buy it now
                </Button>
            </NavLink>
        </div>


    </div>
}