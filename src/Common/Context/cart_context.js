import {createContext, useContext, useEffect, useReducer} from "react";
import reducer from "../Reducer/cartReducer";

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const getLocalCartData = () => {
        let localCartData = localStorage.getItem("myCart");
        if (localCartData === []) {
            return [];
        } else {
            return JSON.parse(localCartData)
        }
    }
    const initialState = {
        cart: getLocalCartData(),
        total_item: "",
        total_price: "",
        shipping_fee: 5000,
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id, color, amount, product) => {
        dispatch({type: "ADD_TO_CART", payload: {id, color, amount, product}});
    }

    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload: id})
    }
    //local storage
    useEffect(() => {
        dispatch({type: "CART_TOTAL"})
        localStorage.setItem("myCart", JSON.stringify(state.cart))

    }, [state.cart])

    const clearCart = () => {
        dispatch({type: "CLEAR_CART"})
    }
    const setIncrease = (id) => {
        dispatch({type: "INCREASE", payload: id})
    }
    const setDecrease = (id) => {
        dispatch({type: "DECREASE", payload: id})
    }
    return <CartContext.Provider value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setIncrease,
        setDecrease

    }}>
        {children}
    </CartContext.Provider>
}

export const useCartContext = () => {
    return useContext(CartContext)
}