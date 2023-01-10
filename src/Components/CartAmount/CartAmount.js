import React from "react";
import {Button} from "@mui/material";
import "./cartAmount.scss";
import {FaMinus,  FaPlus} from "react-icons/fa";

export default function CartAmount({amount, setDecrease, setIncrease}) {
    return <div className={"cart-amount"}>
        <button onClick={() => setDecrease()} >
            <FaMinus/>
        </button>
        <div className={"amount"}>{amount}</div>
        <button onClick={() => setIncrease()}>
            <FaPlus/>
        </button>
    </div>
}