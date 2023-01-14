import React from "react";
import "./heroSection.scss";
import {Carousel} from 'react-carousel-minimal';


export default function HeroSection() {

    const data = [
        {
            image: "https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg",
            // caption: "Shop Online"
        },
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
            // caption: "Shop Online"
        },
        {
            image: "https://www.kiwiqa.com/wp-content/uploads/2019/07/Ecommerce-Website-Testing.jpg",
            // caption: "Shop Online"
        },

    ];

    // const captionStyle = {
    //     fontSize: '2em',
    //     fontWeight: 'bold',
    //     cursor: "pointer",
    //     color: "black"
    //
    // }

    return <div>

        <Carousel
            data={data}
            time={5000}
            width="1400px"
            height="400px"
            // captionStyle={captionStyle}
            // captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // thumbnails={true}
            // thumbnailWidth="100px"
            style={{
                textAlign: "center",
                maxWidth: "1400px",
                maxHeight: "500px",
                margin: "auto"
            }}
        />
    </div>


}
