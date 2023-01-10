import React from "react";
import {NavLink} from "react-router-dom";
import "../FeatureProduct.scss";
import {Typography} from "@mui/material";
import FormatPrice from "../../../Common/Helpers/FormatPrice";
import Rating from "../../Rating/Rating";
import {useProductContext} from "../../../Common/Context/productContext";

export default function Product(current) {
    const {id,name,image,price}=current;
    const {singleProduct} = useProductContext();
    const {stars} = singleProduct;


    return<NavLink to={`/singleProduct/${id}`}>
        <div className={"card"}>
            <figure>
                <img src={image} alt={name}/>
            </figure>
            <div className={"card-data"}>
                <Typography className={"p-name"}>{name}</Typography>
                <Typography className={"p-price"}><FormatPrice price={price}/></Typography>
                <Rating stars={stars}/>
            </div>

        </div>
    </NavLink>
}