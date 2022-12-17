import {createContext, useEffect, useReducer,useContext} from "react";
import axios from "axios";
import reducer from "../Reducer/productReducer";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: []
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState);
    const getProducts = async (url) => {
        dispatch({type:"SET_LOADING"})
        try {
            const res = await axios.get(url)
            const products = await res.data
            dispatch({type: "MY_DATA", payload: products})
        } catch (e) {
            dispatch({type:"API_ERROR"})
        }

    }
    useEffect(() => {
        getProducts(API)
        //     .catch((err) => {
        //     console.log(err)
        // })
    }, []);

    return <AppContext.Provider  value={{...state}}>

        {children}
    </AppContext.Provider>
}

const useProductContext = () => {
  return useContext(AppContext)
}

export {AppProvider, AppContext,useProductContext};