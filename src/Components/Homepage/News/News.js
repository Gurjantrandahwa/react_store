import React from "react";
import "./News.scss";
import {Button} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";


export default function News() {
    return <div className={"news"}>

        <h1>Latest News</h1>
        <div className={"wrapper"}>
            <div className={"left"}>

                <img
                    className={"left-img"}
                    src={"https://www.brandinginasia.com/wp-content/uploads/2022/10/Dove-making-virtual-beauty-real.jpg"}
                    alt={""}/>
                <div className={"left-text"}>
                    <p>25/10/2022</p>
                    <h3>This takes its Real Beauty mission to the virtual world</h3>
                    <p>New partnership aims to create a more representative, inclusive environment online.
                        Here’s how the Real Virtual Beauty coalition will change the game</p>
                </div>

            </div>
            <div className={"right"}>
                {
                    [
                        {
                            img: "https://i.pinimg.com/564x/03/c9/5b/03c95ba8c214ea6f5b8e529aa848798d.jpg",
                            date: "12/10/2022",
                            header: "Why soil matters and how we can save it."
                        },
                        {
                            img: "https://i.pinimg.com/564x/03/c9/5b/03c95ba8c214ea6f5b8e529aa848798d.jpg",
                            date: "11/07/2022",
                            header: "Find out how this the heritage to grow."
                        },
                        {
                            img: "https://i.pinimg.com/564x/03/c9/5b/03c95ba8c214ea6f5b8e529aa848798d.jpg",
                            date: "14/09/2022",
                            header: "An increase focus on health with vitamins."
                        },
                    ].map((value, index) => {
                        return <div className={"right-card"} key={index}>
                            <img
                                className={"right-img"}
                                src={value.img} alt={""}/>
                            <div className={"right-text"}>
                                <p>{value.date}</p>
                                <h3>{value.header}</h3>
                            </div>
                        </div>
                    })
                }


            </div>
        </div>
        <div className={"button-container"}>
            <Button>View details</Button>
            <Button className={"icon-button"}><ArrowRightIcon/></Button>
        </div>
    </div>
}