import {createContext, useContext, useEffect, useReducer} from "react";
import {useProductContext} from "./productContext";
import reducer from "../Reducer/filterReducer"

const FilterContext = createContext();

export const FilterContextProvider = ({children}) => {
    const initialState = {
        filter_products: [],
        all_products: [],
        grid_view: true,
        sorting_value: "lowest",
    }

    const {products} = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState)

    const setGridView = () => {
        return dispatch({type: "SET_GRIDVIEW"})
    }

    const setListView = () => {
        return dispatch({type: "SET_LISTVIEW"})
    }
    //sorting
    useEffect(() => {
        console.log("hii")
    }, [state.sorting_value])

    const sorting = () => {
        return dispatch({type: "GET_SORT_VALUE"})
    }

    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products})

    }, [products])

    return <FilterContext.Provider value={{...state, setGridView, setListView, sorting}}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}