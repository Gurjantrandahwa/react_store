import React from "react";
import "./FeatureProduct.scss";
import {useProductContext} from "../../Common/Context/productContext";
import {CircularProgress, Typography} from "@mui/material";


export default function FeatureProducts() {
    const {isLoading, featureProducts} = useProductContext();
    console.log("feature", featureProducts)
    if (isLoading) {
        return <div className={"loader"}>
            <CircularProgress color="secondary"/>
        </div>
    }
    return <div className={"container feature-container"}>
        <Typography variant={"caption"}>
            Our Features Products
        </Typography>
        <div className={"features-products"}>

            {featureProducts.map((value, index) => {
                return <div key={index}>
                    <img src={value.image} alt={"feature"} width={200}/>
                </div>
            })}
        </div>
    </div>


}