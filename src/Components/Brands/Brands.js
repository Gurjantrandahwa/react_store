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
                            brand: "https://i.pinimg.com/564x/3f/7c/d3/3f7cd3958d1f05c7ed52dd8c7759abe6.jpg"
                        },
                        {
                            brand: "https://i.pinimg.com/564x/3f/7c/d3/3f7cd3958d1f05c7ed52dd8c7759abe6.jpg"
                        },
                        {
                            brand: "https://i.pinimg.com/564x/3f/7c/d3/3f7cd3958d1f05c7ed52dd8c7759abe6.jpg"
                        },
                        {
                            brand: "https://i.pinimg.com/564x/3f/7c/d3/3f7cd3958d1f05c7ed52dd8c7759abe6.jpg"
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