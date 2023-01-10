import React from "react";
import "./FilterProducts.scss";
import {Button, Checkbox, Divider, Typography} from "@mui/material";
import {useFilterContext} from "../../Common/Context/filter_context";
import {FaCheck} from "react-icons/fa";
import FormatPrice from "../../Common/Helpers/FormatPrice";
import {ChevronRight} from "@mui/icons-material";

export default function FilterProducts() {
    const {
        filters: {text, category, company, color, maxPrice, price, minPrice},
        updateFilterValue,
        clearFilters,
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

        <div className={"category-data"}>
            <Typography variant={"h5"}>
                Categories
            </Typography>

                {categoryData.map((elem, index) => {
                    return <Button
                        key={index}
                        type={"button"}
                        name={"category"}
                        value={elem}
                        onClick={updateFilterValue}
                    >
                        {/*<Checkbox onChange={updateFilterValue} value={elem} name={"category"}/>*/}
                        {elem}
                    </Button>
                })}
            </div>
        <Divider/>
        <div>

            <form action={"#"}>
                <Typography variant={"h5"}>Product type</Typography>
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
        <Divider/>
        <div className={"colors-container"}>
            <Typography variant={"h5"}>Colors</Typography>
            <div className={"color-wrapper"}>

                {
                    colorsData.map((curColor, index) => {
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
        <Divider/>
        <div className={"range-wrapper"}>
            <Typography
                variant={"h5"}>Price</Typography>

            <Typography

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
        <Divider/>
        <div>
            <Button
                className={"clear-filter"}
                variant={"contained"}
                onClick={clearFilters}
            >
                Clear filters
            </Button>
        </div>

    </div>
}