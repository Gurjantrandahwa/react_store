import React from "react";
import "./FilterProducts.scss";
import {TextField} from "@mui/material";

export default function FilterProducts() {
    return <div className={"filter-p-container"}>
        <form>
            <TextField
                variant={"filled"}
                size={"small"}/>
        </form>
    </div>
}