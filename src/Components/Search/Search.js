import React from "react";
import "./Search.scss";
import {Button, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {BsPerson} from "react-icons/bs";
import {RiShoppingCartLine} from "react-icons/ri";
import {useFilterContext} from "../../Common/Context/filter_context";
import {useCartContext} from "../../Common/Context/cart_context";
import {useAuth0} from "@auth0/auth0-react";

export default function Search() {
    const {total_item} = useCartContext()
    const {loginWithRedirect, isAuthenticated, logout} = useAuth0();
    const {
        filters: {text},
        updateFilterValue
    } = useFilterContext();
    return <div className={"search-wrapper"}>
        {/*logo*/}
        <NavLink to={"/"}>
            <div className={"logo-wrapper"}>
                <img src={"https://i.pinimg.com/564x/73/8c/66/738c66a1e117f638020803ff8c6a6575.jpg"}
                     alt={"logo"}/>
                <Typography variant={"h6"}>Global Store</Typography>
            </div>
        </NavLink>
        {/*Search*/}
        <div className={"search"}>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    placeholder={"Search any things"}
                    type={"text"}
                    name={"text"}
                    value={text}
                    onChange={updateFilterValue}
                />
                <NavLink to={"/products"}>
                    <Button>Search</Button>
                </NavLink>
            </form>
        </div>
        {/*Sign In*/}
        <div className={"cart-wrapper"}>
            {isAuthenticated ?
                <Button
                    startIcon={<BsPerson/>}
                    onClick={() => logout({returnTo: window.location.origin})}>
                    Log out
                </Button> :

                <Button
                    startIcon={<BsPerson/>}
                    onClick={() => loginWithRedirect()}>Log in
                </Button>
            }
            <NavLink to={"/cart"}>
            <div className={"single-cart"}>
                <div style={{display: "flex", gap: "4px"}}>
                    <RiShoppingCartLine/>
                    <Typography className={"cart-total"}>{total_item}</Typography>
                </div>

                <Typography>Cart</Typography>
            </div>
        </NavLink>
        </div>
    </div>
}