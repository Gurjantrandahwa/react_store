import React, {useEffect, useState} from "react";
import "./products.scss";
import FilterProducts from "../../Components/FilterProducts/FilterProducts";
import ProductHeader from "../../Components/ProductHeader/ProductHeader";
import ProductList from "../../Components/ProductList/ProductList";
import {useFilterContext} from "../../Common/Context/filter_context";

export default function Products() {
    const {filter_products} = useFilterContext();
    console.log(filter_products)
    return <div className={"products-wrapper"}>
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
}