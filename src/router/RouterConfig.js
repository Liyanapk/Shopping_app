import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ProductPage} from "../components/productpage/ProductPage";
import App from "../App"
import { DataProvider } from "../layout/DataProvider";
import { CartPage } from "../components/cartpage/CartPage";
import {successPayment} from "../components/payment/successPayment"
import { cancelPayment } from "../components/payment/cancelPayment"

const RouterConfig = () => {
    return (

        <BrowserRouter>
                <DataProvider>
            <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/success" element={<successPayment/>} />
                    <Route path="/cancel" element={<cancelPayment />}/>
            </Routes>
                </DataProvider>
        </BrowserRouter>

    )
}

export default RouterConfig