import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Features from "../../Components/Features/Features";
import Brands from "../../Components/Brands/Brands";
import FeatureProducts from "../../Components/FeatureProducts/FeatureProducts";


export default function Homepage() {

    return <div>
        <HeroSection />
        <FeatureProducts/>
        <Features/>
        <Brands/>
    </div>

}