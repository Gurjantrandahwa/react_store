import React from "react";
import "./FilterProducts.scss";
import {Button, TextField, Typography} from "@mui/material";
import {useFilterContext} from "../../Common/Context/filter_context";

export default function FilterProducts() {
    const {
        filters: {text, category, company, color},
        updateFilterValue,
        all_products,
    } = useFilterContext();

    const getUniqueData = (data, property) => {
        let newValue = data.map((elem) => {
            return elem[property]
        });
        if (property === "colors") {

            // return newValue = ["All", ...new Set([].concat(...newValue))];
            newValue = newValue.flat();
        }
        return newValue = ["all", ...new Set(newValue)]


    }
    const categoryData = getUniqueData(all_products, "category")
    const companyData = getUniqueData(all_products, "company")
    const colorsData = getUniqueData(all_products, "colors")

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
            <Typography variant={"h5"}>
                Category
            </Typography>
            <div className={"category-data"}>
                {categoryData.map((elem, index) => {
                    return <Button
                        key={index}
                        type={"button"}
                        name={"category"}
                        value={elem}
                        onClick={updateFilterValue}
                    >
                        {elem}
                    </Button>
                })}
            </div>
        </div>
        <div>
            <Typography variant={"h5"}>Company</Typography>
            <form action={"#"}>
                <select
                    className={"company-select"}
                    name={"company"}
                    id={"company"}
                    onClick={updateFilterValue}
                >
                    {
                        companyData.map((value, index) => {
                            return <option
                                key={index}
                                value={value}
                                name={"company"}
                            >
                                {value}
                            </option>
                        })
                    }
                </select>
            </form>
        </div>
        <div>
            <Typography variant={"h5"}>Colors</Typography>
            <div className={"color-wrapper"}>
                {
                    colorsData.map((curColor, index) => {
                        return <button
                            className={"round-btn"}
                            type={"button"}
                            key={index}
                            value={curColor}
                            name={"color"}
                            style={{backgroundColor: curColor}}
                            onClick={updateFilterValue}

                        >
                            {color === curColor ? "" : null}
                        </button>
                    })
                }
            </div>

        </div>
    </div>
}