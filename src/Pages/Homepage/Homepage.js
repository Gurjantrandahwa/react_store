import React from "react";
import "./homepage.scss";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Features from "../../Components/Features/Features";
import Brands from "../../Components/Brands/Brands";


export default function Homepage() {
    const data = {
        name: "global store",
        image: "https://i.pinimg.com/564x/7c/b3/ad/7cb3ad483b184abde16e4a8bb220da9a.jpg"
    }
    return <div>
        <HeroSection myData={data}/>
        <Features/>
        <Brands/>
    </div>

}