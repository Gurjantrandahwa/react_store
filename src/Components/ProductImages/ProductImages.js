import React, {useState} from "react";
import "./ProductImages.scss";

const ProductImages = ({images = [{url: ""}]}) => {

    const [mainImage, setMainImage] = useState(images[0])
    return <div className={"images-container"}>
        <div className={"main-image"}>
            <img src={mainImage.url} alt={mainImage.filename}/>
        </div>
        {/*<div className={"images-container-images"}>*/}
        {/*    {*/}
        {/*        images.map((current, index) => {*/}
        {/*            return <div key={index}>*/}
        {/*                <figure>*/}
        {/*                    <img*/}
        {/*                        onClick={() => setMainImage(current)}*/}
        {/*                        key={index}*/}
        {/*                        src={current.url}*/}
        {/*                        alt={current.filename}/>*/}
        {/*                </figure>*/}
        {/*            </div>*/}
        {/*        })*/}
        {/*    }*/}
        {/*</div>*/}


    </div>
}
export default ProductImages;