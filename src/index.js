import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {AppProvider} from "./Common/Context/productContext";
import {FilterContextProvider} from "./Common/Context/filter_context";
import {CartProvider} from "./Common/Context/cart_context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppProvider>
            <FilterContextProvider>
                <CartProvider>
                    <App/>
                </CartProvider>
            </FilterContextProvider>

        </AppProvider>

    </React.StrictMode>
);

