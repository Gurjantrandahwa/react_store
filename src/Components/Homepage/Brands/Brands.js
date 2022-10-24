import React from "react";
import "./Brands.scss";
import {AiFillClockCircle} from "react-icons/ai";

export default function Brands() {
    return <div className={"brands"}>
        {
            [
                {
                    cardImage: "https://i.pinimg.com/originals/50/78/a0/5078a05eb1b6847d93383eaa4c0ed500.gif",
                    data: "Behind the brands: why some brand’s the world’s No.1-selling products",
                    date: "03/05/2022",
                    time: "Average read time: 6 minutes",
                },
                {
                    cardImage: "https://i.pinimg.com/originals/66/fd/59/66fd590bc971ed78d591338eae20d9fe.gif",
                    date: "14/9/2022",
                    data: "Our Compass Organisation: introducing the stores’s five Business Groups",
                    time: "Average read time: 4 minutes",
                },
                {
                    cardImage: "https://i.pinimg.com/originals/42/68/de/4268de8240c22d1320ae4b8ad77c2413.gif",
                    date: "13/10/2021",
                    data: "Introducing our fast-growing Health & Well being business",
                    time: "Average read time: 5 minutes",
                },
                {
                    cardImage: "https://i.pinimg.com/originals/b7/d6/8c/b7d68cdf1b8af238860fba71514eda5a.gif",
                    date: "23/10/2022",
                    data: "Why investing in sustainable business is good for business",
                    time: "Average read time: 3 minutes",
                },

            ].map((value, index) => {
                return <div key={index} className={"cards"}>
                    <img src={value.cardImage} alt={"cards"}/>
                    <div>
                        <p className={"date"}> {value.date}</p>
                        <h5 className={"data"}>{value.data}</h5>

                        <p className={"time"}><AiFillClockCircle color={"blue"}/>{value.time}</p>

                    </div>

                </div>
            })
        }
    </div>
}