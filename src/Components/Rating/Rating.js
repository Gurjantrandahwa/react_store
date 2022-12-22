import React from "react";
import {FaStar, FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";
import {Typography} from "@mui/material";

const Rating = ({stars, reviews}) => {
    const ratingStar = Array.from({length: 5}, (e, index) => {
        let number = index + 0.5;
        return <span key={index}>
            {
                stars >= index + 1
                    ? <FaStar color={"goldenrod"} size={20}/>
                    : stars >= number
                        ? <FaStarHalfAlt color={"goldenrod"} size={20}/>
                        : <AiOutlineStar color={"goldenrod"} size={20}/>
            }
        </span>

    });

    return <div>

        <Typography
            sx={{alignItems: "center", display: "flex", gap: "10px"}}>
            {ratingStar}

                ({reviews} customers review)
        </Typography>
    </div>
}
export default Rating;
