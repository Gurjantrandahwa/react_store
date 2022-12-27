import {createContext, useContext, useEffect, useReducer} from "react";
import {useProductContext} from "./productContext";
import reducer from "../Reducer/filterReducer"

const FilterContext = createContext();

export const FilterContextProvider = ({children}) => {
    const initialState = {
        filter_products: [],
        all_products: []
    }

    const {products} = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload: products})

    }, [products])

    return <FilterContext.Provider value={{...state}}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}