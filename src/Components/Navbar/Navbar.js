import React, {useState} from "react";
import "./navbar.scss";
import {NavLink} from "react-router-dom";
import {CgClose, CgMenu} from "react-icons/cg";
import { Typography} from "@mui/material";
import {useFilterContext} from "../../Common/Context/filter_context";


export default function Navbar() {
    const [menuIcon, setMenuIcon] = useState()
    const {updateFilterValue, all_products} = useFilterContext();
    const getUniqueData = (data, property) => {
        let newValue = data.map((elem) => {
            return elem[property]
        });
        if (property === "colors") {
            newValue = newValue.flat();
        }
        return newValue = ["all", ...new Set(newValue)]
    }
    const categoryData = getUniqueData(all_products, "category")
    return <div className={menuIcon ? "navbar active" : "navbar"}>

            <form action={"#"}>
                <label htmlFor={"category"}> </label>
                <NavLink to={"/products"} >
                <select
                    id="category"
                    name={"category"}
                    onClick={updateFilterValue}
                >
                    <option disabled>Browse categories</option>
                    {categoryData.map((elem, index) => {
                        return  <option
                                key={index}
                                value={elem}
                            >
                                {elem}
                            </option>
                    })}
                </select>
                </NavLink>
            </form>

        <ul className={"nav-lists"} onClick={() => setMenuIcon(false)}>
            <li>
                <NavLink to={"/"}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to={"/catalog"}>
                    Catalog
                </NavLink>
            </li>
            <li>
                <NavLink to={"/products"}>
                    Products
                </NavLink>
            </li>
            <li>
                <NavLink to={"/pages"}>
                    Pages
                </NavLink>
            </li>
            <li>
                <NavLink to={"/about"}>
                    About us
                </NavLink>
            </li>
        </ul>
        <div>
            <Typography sx={{
                color: "#003F62",
                fontWeight: 600,
                fontSize: "14px"
            }}>30 Days Free Return</Typography>
        </div>

        {/*mobile*/}
        <div className={"mobile-navbar-btn"}>
            <CgMenu name={"menu-outline"} className={"menu-icon"}
                    onClick={() => setMenuIcon(true)}/>
            <CgClose name={"close-outline"}
                     className={"menu-icon close-icon"}
                     onClick={() => setMenuIcon(false)}/>
        </div>
    </div>

}