import React from "react";
import "./homepage.scss";



export default function Homepage() {
    return <div>
        <div className="h-container">

            <div id="myCarousel" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"/>
                    <li data-target="#myCarousel" data-slide-to="1"/>
                    <li data-target="#myCarousel" data-slide-to="2"/>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <img
                            src="https://img.freepik.com/free-vector/shopping-time-banner-with-realistic-map-cart-gift-bags-vector-illustration_548887-120.jpg?w=2000"
                            alt="Los Angeles"
                        />
                    </div>

                    <div className="item">
                        <img
                            src="https://i.pinimg.com/564x/b6/71/21/b671214b9f63fc59eb5ef78a530c2d7d.jpg"
                            alt="Chicago"
                        />
                    </div>

                    <div className="item">
                        <img src="https://i.pinimg.com/564x/41/b2/06/41b206bc257d0079c9f02ce41d306c82.jpg"
                             alt="New york"/>
                    </div>
                </div>


                <a className="left carousel-control" href="#myCarousel"
                   data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"/>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel"
                   data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"/>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>


    </div>

}