import React, {useEffect, useState} from "react";
import "./products.scss";

export default function Products() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([])
    const productsAPi = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json()
            setLoading(false)
            setProducts(data)
            console.log(data)

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        productsAPi().catch((error) => {
            console.log(error)
        });
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
    return <div className={"products-container"}>

        <h1>Products</h1>
        {products.map((value,index) => {
            return<div key={index} className={"products"}>
                <img src={value.image} width={200} alt={""}/>
                <h4>Category:{" "}{value.category}</h4>
                <h5>Price:{" "}<span style={{color:"red"}}>${value.price}</span></h5>
                <p className={"products-title"}>{value.title}</p>
            </div>
        })}
    </div>
}