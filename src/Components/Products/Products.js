import React, {useEffect, useState} from "react";
import "./products.scss";

export default function Products() {
    const [products,setProducts]=useState([])
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1a45904997msh5953a5178ce4a89p1b1ef1jsn3cdfb66640c7',
            'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
    };

    fetch('https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple', options)

        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return <div>
        <h1>Products</h1>

    </div>
}