import React, {useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";
import {useProductContext} from "../../Common/Context/productContext";
import "./singleProduct.scss";
import {CircularProgress, Typography} from "@mui/material";
import FormatPrice from "../../Helpers/FormatPrice";
import {TbReplace, TbTruckDelivery} from "react-icons/tb";
import {MdOutlineDeliveryDining, MdSecurity} from "react-icons/md";
import Images from "../../Components/Images/Images";
import Rating from "../../Components/Rating/Rating";


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
            <NavLink to={"/"}>Home</NavLink>/ {name}
        </div>

        <div className={"single-product-wrapper"}>
            <div className={"sp-images-wrapper"}>
                <Images images={image}/>
            </div>

            {/*Text*/}
            <div className={"sp-text-wrapper"}>
                <div style={{margin:"40px 0px"}}>
                    <Typography variant={"h4"} textTransform={"capitalize"}>
                        {name}
                    </Typography>
                    <Rating stars={stars}
                            reviews={reviews}
                    />

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
                    <hr/>
                    <div className={"stock"}>
                        <Typography variant={"inherit"}>
                            Available: {stock > 0 ? "In Stock" : "Not Available"}
                        </Typography>
                        <Typography variant={"inherit"}>
                            Brand:{category}
                        </Typography>
                        <Typography variant={"inherit"}>Company:{company}</Typography>
                    </div>

                </div>
                </div>
        </div>
    </div>
}