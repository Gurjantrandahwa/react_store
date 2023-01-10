import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Features from "../../Components/Features/Features";
import Brands from "../../Components/Brands/Brands";
import FeatureProducts from "../../Components/FeatureProducts/FeatureProducts";
import Customers from "../../Components/Customers/Customers";
import PopularBrands from "../../Components/PopularBrands/PopularBrands";


export default function Homepage() {

    return <div className={"homepage-wrapper"}>
        <HeroSection/>
        <FeatureProducts/>
        <Features/>
        <Brands/>
        <Customers/>
        <PopularBrands/>
    </div>

}