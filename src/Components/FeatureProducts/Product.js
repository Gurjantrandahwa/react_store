import React from "react";
import {NavLink} from "react-router-dom";
import "./FeatureProduct.scss";
import {Typography} from "@mui/material";

export default function Product(current) {
    const {id,name,image,price,category}=current;
    return<NavLink to={`/singleProduct/${id}`}>
        <div className={"card"}>
            <figure>
                <img src={image} alt={name}/>
                <figcaption className={"card-category"}>{category}</figcaption>
            </figure>
            <div className={"card-data"}>
                <Typography>{name}</Typography>
                <Typography variant={"caption"}>{price}</Typography>
            </div>
        </div>


    </NavLink>
}