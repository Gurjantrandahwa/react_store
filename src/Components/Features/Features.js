import React from "react";
import "./Features.scss";

export default function Features() {
    return <div className={"container features-wrapper"}>
        {
            [
                {
                    feature: "https://i.pinimg.com/564x/d1/c1/9d/d1c19dcbaaaab060dee83ee19f31ac62.jpg",
                    header: "Super Fast and Free Delivery"
                },
                {
                    feature: "https://i.pinimg.com/564x/05/65/6e/05656e4ee1516548457bb2784127cf10.jpg",
                    header: "Non-contact shipping"
                },
                {
                    feature: "https://i.pinimg.com/564x/cb/c0/d5/cbc0d53c7a258cb467328e969b1e4761.jpg",
                    header: "Money-back Guaranteed"
                },
                {
                    feature: "https://i.pinimg.com/564x/05/ae/5b/05ae5ba0518d506c16480d31fe58184b.jpg",
                    header: "Safe and Secure Payment System"
                },

            ].map((value, index) => {
                return <div key={index} className={"single-feature"}>
                    <img src={value.feature} alt={"feature"}/>
                    <h3>{value.header}</h3>
                </div>
            })
        }

    </div>
}