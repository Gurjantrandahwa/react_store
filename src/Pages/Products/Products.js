import React from "react";
import "./products.scss";
import FilterProducts from "../../Components/FilterProducts/FilterProducts";
import ProductHeader from "../../Components/ProductHeader/ProductHeader";
import ProductList from "../../Components/ProductList/ProductList";
import {ChevronRight} from "@mui/icons-material";
import {Typography} from "@mui/material";
import Banner from "../../Components/Banner/Banner";

export default function Products() {

    return <div>
        <div className={"category-header"}>
            <div>
                <Typography>
                    Home
                </Typography>
                  <ChevronRight/>
                <Typography>All category</Typography>
                <ChevronRight/>
            </div>

        </div>
        <div className={"products-wrapper"}>

            {/* Filter Section*/}
            <div>
                <FilterProducts/>
            </div>
            {/*Main Products*/}
            <div className={"main-products"}>
                {/*Product Header*/}
                <div>
                    <ProductHeader/>
                </div>
                {/*Products*/}
                <div>
                    <ProductList/>
                </div>
            </div>
        </div>
        <Banner/>
    </div>
}