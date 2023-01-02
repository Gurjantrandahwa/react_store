import React, {useState} from "react";
import "./FilterProducts.scss";
import {TextField} from "@mui/material";
import {useFilterContext} from "../../Common/Context/filter_context";

export default function FilterProducts() {
    const {
        filters: {text},
        updateFilterValue,
        filter_products
    } = useFilterContext();

    return <div className={"filter-p-container"}>
        <form onSubmit={(e) => e.preventDefault()}>
            <TextField
                label={"Search"}
                variant={"outlined"}
                size={"small"}
                type={"text"}
                name={"text"}
                value={text}
                onChange={updateFilterValue}/>
        </form>

    </div>
}