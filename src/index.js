import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './feautures/user';
import themeReducer from './feautures/theme';
import cartReducer from './feautures/cart/cartSlice';
import modalReducer from './feautures/modal/modalSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer,
        cart: cartReducer,
        modal: modalReducer
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);