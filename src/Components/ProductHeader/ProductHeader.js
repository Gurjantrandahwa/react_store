import React from "react";
import "./productHeader.scss"
import {IconButton,  Typography} from "@mui/material";
import {BsFillGridFill, BsList} from "react-icons/bs";
import {useFilterContext} from "../../Common/Context/filter_context";


export default function ProductHeader() {

    const {filter_products, grid_view, setGridView, setListView,sorting } = useFilterContext()
    return <div className={"product-header"}>

        <div >
            <IconButton
                className={grid_view ? "icon-button-h-active icon-button-h" : "icon-button-h"}
                onClick={setGridView}>
                <BsFillGridFill/>
            </IconButton>
            <IconButton className={!grid_view ? "icon-button-h-active icon-button-h" : "icon-button-h"}
                        onClick={setListView}>
                <BsList/>
            </IconButton>
        </div>

        <div>
            <Typography variant={"h5"}>
                {`${filter_products.length} Products available`}
            </Typography>

        </div>
        <div>
            <form action={"#"}>
                <label htmlFor={"sort"}> </label>
                <select

                    id="sort"
                    name={"sort"}
                    onClick={sorting}
                >
                    <option value={"lowest"}>Price(lowest)</option>
                    <option value={"highest"}>Price(highest)</option>
                    <option value={"a-z"}>Price(a-z)</option>
                    <option value={"z-a"}>Price(z-a)</option>
                </select>
            </form>
        </div>
    </div>
}