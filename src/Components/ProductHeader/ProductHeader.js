import React, {useState} from "react";
import "./productHeader.scss"
import {FormControl, IconButton, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {BsFillGridFill, BsList} from "react-icons/bs";
import {useFilterContext} from "../../Common/Context/filter_context";

export default function ProductHeader() {
    // const [price, setPrice] = useState('');
    // const handleChange = (event) => {
    //     setPrice(event.target.value);
    // };
    const {filter_products, grid_view, setGridView, setListView,sorting } = useFilterContext()
    return <div className={"product-header"}>
        {/*gid*/}
        <div>
            <IconButton
                sx={{marginRight: "15px"}}
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
            <Typography color={"mediumvioletred"}>
                {`${filter_products.length} Products available`}
            </Typography>

        </div>
        <div>
            <form action={"#"}
            >
                <label htmlFor={"sort"}>Price</label>
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