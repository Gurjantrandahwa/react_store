import React from "react";
import "./FilterProducts.scss";
import {TextField, Typography} from "@mui/material";
import {useFilterContext} from "../../Common/Context/filter_context";

export default function FilterProducts() {
    const {
        filters: {text,category},
        updateFilterValue,
        all_products,
    } = useFilterContext();

    const getUniqueData = (data, property) => {
        let newValue = data.map((elem) => {
            return elem[property]
        });
        return newValue = ["All", ...new Set(newValue)]
    }
    const categoryOnlyData = getUniqueData(all_products, "category")
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
        <div>
            <Typography variant={"h5"}>Category</Typography>
            <div>
                {categoryOnlyData.map((elem,index)=>{
                    return<button
                    key={index}
                    type={"button"}
                    name={"category"}
                    value={elem}
                    onClick={updateFilterValue}
                    >
                        {elem}
                    </button>
                })}
            </div>
        </div>
    </div>
}