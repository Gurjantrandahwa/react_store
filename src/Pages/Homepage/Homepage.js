import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import FeatureProducts from "../../Components/FeatureProducts/FeatureProducts";
import Customers from "../../Components/Customers/Customers";
import PopularBrands from "../../Components/PopularBrands/PopularBrands";


export default function Homepage() {

    return <div className={"homepage-wrapper"}>
        <HeroSection/>
        <FeatureProducts/>
        <Banner/>
        <Brands/>
        <Customers/>
        <PopularBrands/>
    </div>

}