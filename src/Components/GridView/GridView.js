import React from "react";
import Product from "../FeatureProducts/Product";
import "./gridView.scss"
export default function GridView({products}) {
    console.log(products)
    return<div className={"grid_container"}>
        {
            products.map((value)=>{
                return<Product key={value.id} {...value }/>
            })
        }
    </div>
}