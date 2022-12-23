import React from "react";
import {Button} from "@mui/material";
import "./cartAmount.scss";
import {FaMinus,  FaPlus} from "react-icons/fa";

export default function CartAmount({amount, setDecrease, setIncrease}) {
    return <div className={"cart-amount"}>
        <Button onClick={() => setDecrease()} >
            <FaMinus/>

        </Button>
        <div>{amount}</div>
        <Button onClick={() => setIncrease()}>
            <FaPlus/>
        </Button>
    </div>
}