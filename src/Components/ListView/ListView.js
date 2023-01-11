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

                        <img src={value.image} alt={value.name}/>
                    <div className={"list-view-card-data"}>

                            <Typography variant={"h5"}>
                                {value.name}
                            </Typography>
                            <Typography variant={"h6"} >
                                <FormatPrice price={value.price}/>
                            </Typography>

                        <Typography>
                            {lengthOfDes(value?.description,100)}
                        </Typography>
                        <NavLink to={`/singleProduct/${value.id}`}>
                            <Button variant={"contained"}>
                                Read More
                            </Button>
                        </NavLink>
                    </div>

                </div>
            })
        }
    </div>
}