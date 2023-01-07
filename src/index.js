import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {AppProvider} from "./Common/Context/productContext";
import {FilterContextProvider} from "./Common/Context/filter_context";
import {CartProvider} from "./Common/Context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-xurubluek4cinrlc.us.auth0.com"
            clientId="Dzxu5fBW72es591npzkQWSdhEJCNSh1t"
            redirectUri={window.location.origin}
        >
            <AppProvider>
                <FilterContextProvider>
                    <CartProvider>
                        <App/>
                    </CartProvider>
                </FilterContextProvider>

            </AppProvider>
        </Auth0Provider>
    </React.StrictMode>
);

