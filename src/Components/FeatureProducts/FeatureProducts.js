import React from "react";
import "./FeatureProduct.scss";
import {useProductContext} from "../../Common/Context/productContext";
import {CircularProgress, Typography} from "@mui/material";
import Product from "./Product";


export default function FeatureProducts() {
    const {isLoading, featureProducts} = useProductContext();
    if (isLoading) {
        return <div className={"loader"}>
            <CircularProgress color="secondary"/>
        </div>
    }
    return <div className={"container feature-container"}>
        <Typography variant={"h5"} sx={{
            marginBottom: "30px", textAlign: "center",
        }}>
            Our Features Products
        </Typography>
        <div className={"features-products"}>

            {featureProducts.map((current) => {
                return <Product key={current.id} {...current}/>
            })}
        </div>
    </div>


}