import React from "react";
import "./SharePrice.scss";
import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";

export default function SharePrice() {
    return <div className={"shares"}>
        <div className={"header-wrapper"}>
            <h1>Share price</h1>
            <p>Our latest share information for Global PLC</p>
        </div>
        <div className={"share-wrapper"}>
            {
                [
                    {
                        name: "UK",
                        price: "3,520.20",
                        performance: "-10.00",
                        icon: <AiFillCaretDown/>,
                        date: "11/10/2022",
                        time: "10:12 BST",
                    },
                    {
                        name: "Netherlands",
                        price: "3,520.20",
                        performance: <h4 className={"green"}>+0.03<AiFillCaretUp/></h4>,
                        date: "01/6/2022",
                        time: "11:17 CeST",
                    },
                    {
                        name: "America",
                        price: "3,520.20",
                        performance: "-10.00",
                        icon: <AiFillCaretUp/>,
                        date: "02/07/2022",
                        time: "10:12 edT",
                    },
                ].map((value, index) => {
                    return <div key={index} className={"ShareName"}>
                        <h3>{value.name}</h3>
                        <h2>{value.price}</h2>
                        <h4>{value.performance}{value.icon}</h4>
                        <div className={"date-time"}>
                            <p>{value.date}</p>
                            <p>{value.time}</p>
                        </div>

                    </div>
                })
            }
        </div>
    </div>
}