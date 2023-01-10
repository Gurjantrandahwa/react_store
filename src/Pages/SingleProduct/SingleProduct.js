import React, {useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";
import {useProductContext} from "../../Common/Context/productContext";
import "./singleProduct.scss";
import {CircularProgress, Typography} from "@mui/material";
import FormatPrice from "../../Common/Helpers/FormatPrice";
import {TbReplace, TbTruckDelivery} from "react-icons/tb";
import {MdOutlineDeliveryDining, MdSecurity} from "react-icons/md";
import ProductImages from "../../Components/ProductImages/ProductImages";
import Rating from "../../Components/Rating/Rating";
import AddToCart from "../../Components/AddToCart/AddToCart";
import {ChevronRight} from "@mui/icons-material";

export default function SingleProduct() {
    const {getSingleProduct, isLoading, singleProduct} = useProductContext();
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
            <div className={"sp-text-wrapper"}>
                <div style={{margin:"40px 0px"}}>
                    <Typography variant={"h4"} textTransform={"capitalize"}>
                        {name}
                    </Typography>
                    <Rating stars={stars}

                    />
                    <Typography>  ({reviews} customers review)</Typography>
                    <Typography className={"product-price"}>
                        MRP:
                        <del>
                            <FormatPrice price={price + 250000}/>
                        </del>
                    </Typography>
                    <Typography variant={""} color={"mediumvioletred"}>
                        Deal of the Day: <FormatPrice price={price}/>
                    </Typography>
                    <Typography variant={"body2"}>{description}</Typography>
                    <div className={"data-qualities"}>
                        {
                            [
                                {
                                    icon: <TbTruckDelivery/>,
                                    title: "Free delivery"
                                },
                                {
                                    icon: <TbReplace/>,
                                    title: "10 Days replacement"
                                },
                                {
                                    icon: <MdOutlineDeliveryDining/>,
                                    title: "delivered"
                                },
                                {
                                    icon: <MdSecurity/>,
                                    title: "Warranty"
                                },
                            ].map(((value, index) => {
                                return <div key={index}>
                                    <div className={"data-qualities-icons"}>

                                        {value.icon}
                                    </div>

                                    <Typography variant={"caption"}>
                                        {value.title}
                                    </Typography>
                                </div>
                            }))
                        }
                    </div>
                    <hr className={"line"}/>
                    <div className={"stock"}>
                        <Typography variant={"body1"} color={"mediumvioletred"}>
                            Available: {stock > 0 ? "In Stock" : "Not Available"}
                        </Typography>
                        <Typography variant={"body1"} color={"mediumvioletred"}>
                            Brand:{category}
                        </Typography>
                        <Typography variant={"body1"} color={"mediumvioletred"}>
                            Company:{company}
                        </Typography>
                    </div>
                    <hr className={"line"}/>
                    {
                        stock>0 &&<AddToCart product={singleProduct}/>
                    }
                </div>

                </div>

        </div>

    </div>
}