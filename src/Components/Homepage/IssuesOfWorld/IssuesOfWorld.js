import React from "react";
import "./IssuesOfWorld.scss";
import {Button} from "@mui/material";
import {ArrowLeft, ArrowRight} from "@mui/icons-material";

export default function IssuesOfWorld() {
    return <div className={"world"}>
        <h1>
            <span style={{color: "#9c44c0"}}>  We’re taking action</span><br/>
            <span style={{color: "#ff544f"}}> on the issues</span><br/>
            <span style={{color: "#00a284"}}> affecting our world.</span>
        </h1>
        <div className={"product-card"}>
            {
                [
                    {
                        img:"https://i.pinimg.com/564x/76/5b/fd/765bfd6592aa37441a5f2e83b5feda89.jpg",
                        header:"Reducing emissions from the use of our products",
                        text:"We want to help build a fairer, more inclusive society. Our foundation must be an equitable workplace."
                    },
                    {
                        img:"https://i.pinimg.com/564x/76/5b/fd/765bfd6592aa37441a5f2e83b5feda89.jpg",
                        header:"Reducing emissions from the use of our products",
                        text:"We want to help build a fairer, more inclusive society. Our foundation must be an equitable workplace."
                    },
                    {
                        img:"https://i.pinimg.com/564x/76/5b/fd/765bfd6592aa37441a5f2e83b5feda89.jpg",
                        header:"Reducing emissions from the use of our products",
                        text:"We want to help build a fairer, more inclusive society. Our foundation must be an equitable workplace."
                    },
                    {
                        img:"https://i.pinimg.com/564x/76/5b/fd/765bfd6592aa37441a5f2e83b5feda89.jpg",
                        header:"Reducing emissions from the use of our products",
                        text:"We want to help build a fairer, more inclusive society. Our foundation must be an equitable workplace."
                    },
                    {
                        img:"https://i.pinimg.com/564x/76/5b/fd/765bfd6592aa37441a5f2e83b5feda89.jpg",
                        header:"Reducing emissions from the use of our products",
                        text:"We want to help build a fairer, more inclusive society. Our foundation must be an equitable workplace."
                    },
                    {
                        img:"https://i.pinimg.com/564x/76/5b/fd/765bfd6592aa37441a5f2e83b5feda89.jpg",
                        header:"Reducing emissions from the use of our products",
                        text:"We want to help build a fairer, more inclusive society. Our foundation must be an equitable workplace."
                    },

                ].map((value, index)=>{
                    return<div key={index} className={"world-card"}>
                        <img src={value.img} alt={""}/>
                        <div className={"world-card-text"}>
                            <h3>{value.header}</h3>
                            <p>{value.text}</p>
                        </div>

                    </div>
                })
            }
        </div>
        <div className={"world-buttons"}>
            <Button  startIcon={<ArrowLeft />} >Previous</Button>
            <Button endIcon={<ArrowRight/>}>Next</Button>
        </div>

    </div>
}