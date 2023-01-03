import React, {useState} from "react";
import "./AddToCart.scss";
import {Alert, Button, Typography} from "@mui/material";
import {FaCheck} from "react-icons/fa";
import CartAmount from "../CartAmount/CartAmount";
import {NavLink} from "react-router-dom";

export default function AddToCart({product}) {
    const {id, colors, stock} = product;
    const [color, setColor] = useState(colors[0])
    const [amount, setAmount] = useState(1)
    const [message,setMessage]=useState("")
    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
        if (amount===stock){
            setMessage(`We have ${stock} items in our stock`)
        }

    }

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
        <div style={{paddingBottom:"30px"}}>
            <CartAmount
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}/>
            {
                amount===stock?
                <div><Alert

                    severity={"warning"}
                    // variant={"outlined"}
                >{message}</Alert></div>:""
            }

        </div>
        <NavLink to={"/cart"}>
            <Button variant={"contained"} color={"secondary"}

            sx={{textTransform:"capitalize"}}>
                Add To cart
            </Button>
        </NavLink>

    </div>
}