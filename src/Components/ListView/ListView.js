import React from "react";
import "./listView.scss";
import {Button, Typography} from "@mui/material";
import FormatPrice from "../../Common/Helpers/FormatPrice";
import {NavLink} from "react-router-dom";

export default function ListView({products}) {
    function lengthOfDes(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return <div>
        {
            products.map((value, index) => {
                return <div className={"list-view-card"} key={index}>
                    <figure>
                        <img src={value.image} width={250} alt={value.name}/>
                    </figure>

                    <div className={"list-view-card-data"}>
                        <Typography variant={"h5"}
                                    sx={{
                                        textTransform:"capitalize"
                                    }}
                                    color={"mediumvioletred"}>
                            {value.name}
                        </Typography>
                        <Typography variant={"subtitle1"}>
                            <FormatPrice price={value.price}/>
                        </Typography>

                        <Typography variant={"body2"} color={"slategray"}>
                            {lengthOfDes(value?.description,100)}
                        </Typography>
                        <NavLink to={`/singleProduct/${value.id}`}>
                            <Button variant={"outlined"}
                            sx={{
                                marginTop:"10px"
                            }}
                            >
                                Read More
                            </Button>
                        </NavLink>
                    </div>

                </div>
            })
        }
    </div>
}