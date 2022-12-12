import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";

export default function About() {
    const data =  {

        name:"our ecommerce",
        image: "https://i.pinimg.com/564x/81/ed/c1/81edc189669ddc3a9f9febdb5896978b.jpg"
    }

    return<div>
        <HeroSection myData={data} />
    </div>
}