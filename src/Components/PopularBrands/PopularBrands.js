import React from "react";
import "./PopularBrands.scss";

export default function PopularBrands() {
    return<div className={"popular-brands"}>
        {
            [
                {
                    image:"https://i.pinimg.com/564x/06/a9/a3/06a9a311e3a8905b6fa0a19068eea153.jpg"
                },
                {
                    image: "https://i.pinimg.com/736x/90/a4/a5/90a4a502db788c5df8b51cd59f2a5e1c.jpg"
                },
                {
                    image: "https://i.pinimg.com/564x/85/c6/0a/85c60a9eabaf6dad1ad0f45403e5c325.jpg"
                },
                {
                    image: "https://i.pinimg.com/564x/fb/29/3f/fb293fb19c6501e7d1049f33bd245959.jpg"
                },
                {
                    image: "https://i.pinimg.com/564x/5f/75/f7/5f75f7a80b2e71f3456b354d29d8820a.jpg"
                }
            ].map( (value, index) => {
                return<div key={index}>

                    <img src={value.image} alt={""}/>
                </div>
            })
        }
    </div>
}