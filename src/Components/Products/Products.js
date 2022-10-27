import React, {useEffect, useState} from "react";
import "./products.scss";

export default function Products() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([])
    const productsAPi = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json()
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


    return <div>
        <h1>Products</h1>
        {products.map((value,index) => {
            return<div key={index} className={"products"}>
                <img src={value.image} width={200} alt={""}/>
                <h3>{value.category}</h3>
                <h4>{value.title}</h4>
            </div>
        })}
    </div>
}