import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ProductPage} from "../components/productpage/ProductPage";
import App from "../App"
import { DataProvider } from "../layout/DataProvider";
import { CartPage } from "../components/cartpage/CartPage";
import { SuccessPayment } from "../components/successpayment/SuccessPayment";
import { CancelPayment } from "../components/cancelpayment/CancelPayment";
import { PersonDetailes } from "../components/persondetailes/PersonDetailes";

const RouterConfig = () => {
    return (

        <BrowserRouter>
                <DataProvider>
            <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/success" element={<SuccessPayment />} />
                    <Route path="/cancel" element={<CancelPayment/>} />
                    <Route path="/person" element={<PersonDetailes/>}/>
                    
            </Routes>
                </DataProvider>
        </BrowserRouter>

    )
}

export default RouterConfig