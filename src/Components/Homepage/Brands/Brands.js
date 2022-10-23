import React from "react";
import "./Brands.scss";

export default function Brands() {
    return <div className={"brands"}>
        {
            [
                {
                    cardImage: "https://cdn.sanity.io/images/92ui5egz/production/a44b7c4f45a9a40a0f0601396bee3ec4aa58cd80-1920x1080.jpg?rect=420,0,1080,1080&w=600&h=600&fit=crop&auto=format",
                    data: "Behind the brands: why some brand’s the world’s No.1-selling products",
                    date: "03/05/2022",
                    time: "342442",
                },
                {
                    cardImage: "https://cdn.sanity.io/images/92ui5egz/production/a44b7c4f45a9a40a0f0601396bee3ec4aa58cd80-1920x1080.jpg?rect=420,0,1080,1080&w=600&h=600&fit=crop&auto=format",
                    date: "14/9/2022",
                    data: "Our Compass Organisation: introducing stores’s five new Business Groups",
                    time: "23424234",
                },
                {
                    cardImage: "https://cdn.sanity.io/images/92ui5egz/production/a44b7c4f45a9a40a0f0601396bee3ec4aa58cd80-1920x1080.jpg?rect=420,0,1080,1080&w=600&h=600&fit=crop&auto=format",
                    date: "13/10/2021",
                    data: "Introducing our fast-growing Health & Well being business",
                    time: "234534535",
                },
                {
                    cardImage: "https://cdn.sanity.io/images/92ui5egz/production/a44b7c4f45a9a40a0f0601396bee3ec4aa58cd80-1920x1080.jpg?rect=420,0,1080,1080&w=600&h=600&fit=crop&auto=format",
                    date: "23/10/2022",
                    data: "Why investing in sustainable business is good for business",
                    time: "234534535",
                },

            ].map((value, index) => {
                return <div key={index}>
                    <img src={value.cardImage} alt={"cards"}/>
                    <div>
                        <p>{value.data}</p>
                        <p> {value.date}</p>
                        <p> {value.date}</p>
                    </div>

                </div>
            })
        }
    </div>
}