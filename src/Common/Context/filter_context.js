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
        filters: {
            text: '',
            category:"all",
            company:"all",
            color:"all"
        },
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

        dispatch({type:"FILTER_PRODUCTS"})
         dispatch({type: "SORTING_PRODUCTS"})
    }, [state.sorting_value,state.filters])

    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({type: "GET_SORT_VALUE", payload: userValue})
    }
    //search
    const updateFilterValue = (event) => {
        let name = event.target.name
        let value = event.target.value
        return dispatch({type: "UPDATE_FILTER_VALUE", payload: {name, value}})
    }

    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products})

    }, [products])

    return <FilterContext.Provider
        value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
    }}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}