import React from "react";
import "./FeatureProduct.scss";
import {useProductContext} from "../../Common/Context/productContext";
import {CircularProgress} from "@mui/material";
import Product from "./Product/Product";

export default function FeatureProducts() {
    const {isLoading, featureProducts} = useProductContext();

    if (isLoading) {
        return <div className={"loader"}>
            <CircularProgress color="error"/>
        </div>
    }
    return <div className={"feature-container"}>
        <div className={"features-products"}>
            {featureProducts.map((current) => {
                return <Product key={current.id} {...current}/>
            })}
        </div>
    </div>


}