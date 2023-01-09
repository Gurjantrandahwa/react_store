import React from "react";
import "./FeatureProduct.scss";
import {useProductContext} from "../../Common/Context/productContext";
import {CircularProgress, Typography} from "@mui/material";
import Product from "./Product/Product";

export default function FeatureProducts() {
    const {isLoading, featureProducts} = useProductContext();

    if (isLoading) {
        return <div className={"loader"}>
            <CircularProgress color="error"/>
        </div>
    }
    return <div className={"feature-container"}>
        <Typography className={"popular-header"}>Popular products</Typography>
        <div className={"features-products"}>
            {featureProducts.map((current) => {
                return <Product key={current.id} {...current}/>
            })}
        </div>
    </div>


}