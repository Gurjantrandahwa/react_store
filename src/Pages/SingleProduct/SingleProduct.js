import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import {useProductContext} from "../../Common/Context/productContext";
import "./singleProduct.scss";
import {Button, CircularProgress, Divider, Typography} from "@mui/material";
import FormatPrice from "../../Common/Helpers/FormatPrice";
import ProductImages from "../../Components/ProductImages/ProductImages";
import Rating from "../../Components/Rating/Rating";
import AddToCart from "../../Components/AddToCart/AddToCart";
import {ChevronRight} from "@mui/icons-material";
import {AiOutlineCheck} from "react-icons/ai";

export default function SingleProduct() {
    const {getSingleProduct, isLoading, singleProduct} = useProductContext();
    const [desc,setDescr]=useState(false)
    const API = "https://api.pujakaitem.com/api/products";
    const {id} = useParams();

    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`);
    }, []);
    const {
        name,
        company,
        price,
        description,
        category,
        stock,
        stars,
        reviews,
        image
    } = singleProduct;

    if (isLoading) {
        return <div className={"loader"}>
            <CircularProgress color="secondary"/>
        </div>
    }
    return <div>
        <div className={"name-link"}>
            {/*<AiOutlineHome/>*/}
            <NavLink to={"/"}>Home</NavLink>
            <ChevronRight/>
            <Typography>{name}</Typography>
            <ChevronRight/>
        </div>

        <div className={"single-product-wrapper"}>
            <div>
                <ProductImages images={image}/>
            </div>

            {/*Text*/}
            <div>
                <div className={"product-name-wrapper"}>
                    <Typography variant={"h5"}>
                        {name}
                    </Typography>
                    <Typography>
                        <FormatPrice price={price}/>
                    </Typography>
                </div>
                <div className={"rating-wrapper"}>
                    <Rating stars={stars}/>
                    <Typography> {reviews} customer reviews</Typography>
                </div>

                <div className={"stock"}>
                    <Typography>
                        Availability :
                    </Typography>
                    <div className={"stock-check"}>
                        {stock > 0 ? <AiOutlineCheck/> : null}
                        {stock > 0 ? "In stock" : "Not Available"}

                    </div>
                </div>
                <Typography className={"stock-length"}>
                    Hurry up! only {stock} product left in stock!
                </Typography>

                <Divider color={"#BDBDBD"}/>
                {
                    stock > 0 && <AddToCart product={singleProduct}/>
                }
                <Divider color={"#BDBDBD"}/>
                <div className={"company-wrapper"}>
                    <div>
                        <Typography variant={"h5"}>
                            Category :
                        </Typography>
                        <Typography>
                            {category}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant={"h5"}>
                            Company :
                        </Typography>
                        <Typography> {company}</Typography>
                    </div>


                </div>

            </div>

        </div>
        <div className={"description-wrapper-buttons"}>

            <Button
                onClick={()=>{setDescr(true)}}
                className={"des-btn"}
            >
                Description
            </Button>
            <Button
                className={"review-btn"}
            >
                Reviews
            </Button>


        </div>
        {
            desc &&
            <Typography variant={"body2"}>{description}</Typography>
        }


    </div>
}