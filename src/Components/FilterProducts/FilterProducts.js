import React from "react";
import "./FilterProducts.scss";
import {Button, TextField, Typography} from "@mui/material";
import {useFilterContext} from "../../Common/Context/filter_context";
import {FaCheck} from "react-icons/fa";
import FormatPrice from "../../Helpers/FormatPrice";

export default function FilterProducts() {
    const {
        filters: {text, category, company, color, maxPrice, price, minPrice},
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
                        if (curColor === "all") {
                            return <Button
                                sx={{textTransform: "none"}}
                                type={"button"}
                                key={index}
                                value={curColor}
                                name={"color"}
                                onClick={updateFilterValue}
                            >
                                All
                            </Button>
                        }
                        return <button
                            className={color === curColor ? "color-btn color-btn-active" : "color-btn"}
                            type={"button"}
                            key={index}
                            value={curColor}
                            name={"color"}
                            style={{backgroundColor: curColor}}
                            onClick={updateFilterValue}

                        >
                            {/*{color === curColor ? "" : null}*/}
                            {color === curColor ? <FaCheck color={"white"}/> : null}
                        </button>
                    })
                }
            </div>

        </div>

        <div>
            <Typography variant={"h5"}>Price</Typography>

            <Typography
                variant={"subtitle1"}
                color={"secondary"}
            >
                <FormatPrice price={price}/>
            </Typography>

                <input
                    type={"range"}
                    min={minPrice}
                    max={maxPrice}
                    value={price}
                    onChange={updateFilterValue}
                    name={"price"}
                />

        </div>


    </div>
}