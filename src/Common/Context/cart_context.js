import {createContext, useContext, useReducer} from "react";
import reducer from "../Reducer/cartReducer";

const CartContext = createContext()

export  const CartProvider = ({children}) => {
    const initialState = () => {

    }
    const addToCart = () => {

    }
    const [state, dispatch] = useReducer(reducer, initialState)

    return <CartContext.Provider value={{
        ...state,
        addToCart

    }}>
        {children}
    </CartContext.Provider>
}

export const useCartContext = () => {
    return useContext(CartContext)
}