import React from "react";
import "./Brands.scss";

export default function Brands() {
    return <div className={"brand"}>
        <h3> Trusted By 1000+ brands</h3>

        <div className={"brands-wrapper container"}>

                {
                    [
                        {
                            brand: "https://i.pinimg.com/564x/3f/7c/d3/3f7cd3958d1f05c7ed52dd8c7759abe6.jpg"
                        },
                        {
                            brand: "https://i.pinimg.com/564x/49/31/1e/49311e48c6c7645e7de2e24b67d29125.jpg"
                        },
                        {
                            brand: "https://i.pinimg.com/564x/85/e9/e3/85e9e3eb45616e2bff3e231f4ac5eb41.jpg"
                        },
                        {
                            brand: "https://i.pinimg.com/564x/7a/b6/e3/7ab6e3454bef45bc02d74ebb65a59b62.jpg"
                        },
                        {
                            brand: "https://i.pinimg.com/564x/54/38/0b/54380bab05b03260cf0ca1366558b35a.jpg"
                        },

                    ].map( (value, index) => {
                        return<div key={index}>
                            <img src={value.brand} alt={"brandName"}/>
                        </div>
                    })
                }

        </div>

    </div>
}