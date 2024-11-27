import React from "react";
import './CartPage.css'


export const CartPage =()=>{



    return(


        <div className="cart">
          
          <h1>CART</h1>
          <table className="table">
            <thead>
                <tr className="table-head">
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quandity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>

          </table>
          


        </div>
    )
}