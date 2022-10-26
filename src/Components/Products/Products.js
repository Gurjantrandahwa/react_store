import React, {useEffect, useState} from "react";
import "./products.scss";

export default function Products() {


    const [products, setProducts] = useState([])
    const getCovidAPi = async () => {
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
        getCovidAPi().catch((error) => {
            console.log(error)
        });
    }, [])
    return <div>
        <h1>Products</h1>
        {products.map((value, index) => {
            return<div key={index} className={"products"}>
                <img src={value.image} alt={""} width={150}/>
                <h5>  {value.title}</h5>


            </div>
        })}
    </div>
}