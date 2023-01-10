import React from "react";
import {FaStar, FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";
import {Typography} from "@mui/material";

const Rating = ({stars}) => {
    const ratingStar = Array.from({length: 5}, (e, index) => {
        let number = index + 0.5;
        return <span key={index}>
            {
                stars >= index + 1
                    ? <FaStar color={"#EDA415"} size={20}/>
                    : stars >= number
                        ? <FaStarHalfAlt color={"#EDA415"} size={20}/>
                        : <AiOutlineStar color={"#EDA415"} size={20}/>
            }
        </span>
    });
    return <div>
        <Typography
            sx={{alignItems: "center", display: "flex", gap: "10px"}}>
            {ratingStar}
        </Typography>
    </div>
}
export default Rating;
