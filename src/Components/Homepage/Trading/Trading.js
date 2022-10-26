import React from "react";
import "./trading.scss";
import {Button} from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function Trading() {
    return <div className={"trading"}>
        <h1>Trading Statement</h1>
        <p>Global store will release its Q3 2022 Trading Statement on 27th October 2022.</p>
        <p>There will be a webcast at 10:00 am .</p>
        <Button>View details</Button>
        <Button ><ArrowRightIcon className={"icon-button"}/></Button>
        <div>
            <img src={"https://i.pinimg.com/564x/ab/ce/5a/abce5a46b5f9df9e0fac9db2c6d4cbe3.jpg"}
                 alt={""}/>
        </div>

    </div>
}