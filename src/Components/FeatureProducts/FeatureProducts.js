import React from "react";
import "./FeatureProduct.scss";
import {useProductContext} from "../../Common/Context/productContext";


export default function FeatureProducts() {
    const {isLoading, featureProducts} = useProductContext();
    console.log("feature", featureProducts)
    return <div className={"features-products container"}>

        {featureProducts.map((value, index) => {
            return <div key={index}>
                <img src={value.image} alt={"feature"} width={200}/>
            </div>
        })}
    </div>
}