import React from "react";
import "./homepage.scss";
import Brands from "../Brands/Brands";
import Trading from "../Trading/Trading";
import SharePrice from "../SharePrice/SharePrice";
import News from "../News/News";
import TakeAction from "../TakeAction/TakeAction";
import IssuesOfWorld from "../IssuesOfWorld/IssuesOfWorld";
import ShareIcon from '@mui/icons-material/Share';
import {FaFacebookF} from "react-icons/fa";
import {TiSocialTwitter} from "react-icons/ti";
import {AiFillLinkedin, AiOutlineInstagram} from "react-icons/ai";
import SearchContact from "../../Headers/SearchContact/SearchContact";
import Footer from "../../Footer/Footer";


export default function Homepage() {

    return <div>
        <div className="container">

            <div id="myCarousel" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"/>
                    <li data-target="#myCarousel" data-slide-to="1"/>
                    <li data-target="#myCarousel" data-slide-to="2"/>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <img
                            src="https://1.bp.blogspot.com/-K_jC5oCj858/VkQYD-Z8yEI/AAAAAAAADtE/9BkiG291RuE/s1600/Askme+grocery+coupon+offer.png"
                            alt="Los Angeles"
                        />
                    </div>

                    <div className="item">
                        <img
                            src="https://cdn11.bigcommerce.com/s-twicn3dmhk/product_images/uploaded_images/deli-4-you-banner.jpg"
                            alt="Chicago"
                        />
                    </div>

                    <div className="item">
                        <img src="https://www.blogoval.com/wp-content/uploads/2021/01/online-grocery-shopping-2.png"
                             alt="New york"/>
                    </div>
                </div>


                <a className="left carousel-control" href="src/Components/Homepage/Homepage/Homepage#myCarousel"
                   data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="src/Components/Homepage/Homepage/Homepage#myCarousel"
                   data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
        <div className={"homepage-text"}>
            <h1>
                <span>Driving superior performance</span><br/>
                <span className={"purpose"}>with our purpose-led,</span><br/>
                <span className={"fit"}>future-fit business</span><br/>
            </h1>
        </div>
        {/*Other Homepage Components*/}

        <div>
            <Brands/>
            <Trading/>
            <SharePrice/>
            <News/>
            <TakeAction/>
            <IssuesOfWorld/>
            <div className={"social-icons"}>
                <ShareIcon fontSize={"large"}/>Share this page
                <FaFacebookF/>
                <TiSocialTwitter/>
                <AiFillLinkedin/>
                <AiOutlineInstagram/>
            </div>
            <SearchContact/>
            <Footer/>
        </div>

    </div>

}