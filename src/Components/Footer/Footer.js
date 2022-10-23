import React from "react";
import "./footer.scss";

export default function Footer() {
    return <div className={"footer"}>
        <div>
            <p>This is global company website </p>
            <p> @ Global 2022 </p>
            <ul>
                <li> What's in our products?</li>
                <li> Contact</li>
                <li> Legal notice</li>
                <li> Modern Slavery Act Transparency Statement</li>
                <li> Accessibility</li>
                <li> Vulnerability Disclosure Policy</li>
                <li> Cookie Notice</li>
                <li> Privacy Notice</li>
                <li> Sitemap</li>
                <li> Search Jobs</li>
            </ul>

        </div>
        <div>
            <img src={"https://www.unilever.com/assets/8ada3bf5.webp"} alt={"footer"}/>

        </div>
    </div>
}