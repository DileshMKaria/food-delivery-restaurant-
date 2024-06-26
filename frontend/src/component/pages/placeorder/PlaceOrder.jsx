import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../../Context/StoreContext";

const PlaceOrder = () => {

    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title"> Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="first name"></input>
          <input type="text" placeholder="last name"></input>
        </div>
        <input type="email" placeholder="email address"></input>
        <input type="text" placeholder="street"></input>
        <div className="multi-fields">
          <input type="text" placeholder="city"></input>
          <input type="text" placeholder="state"></input>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="zip code"></input>
          <input type="text" placeholder="country"></input>
        </div>
        <input type="text" placeholder="Phone"></input>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>cart totals</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery free</p>
              <p>{20}</p>
            </div>
            <hr />
              <div className="cart-total-details">
                <b>total</b>
                <b>${getTotalCartAmount()+20}</b>
              </div>
              <hr />
          </div>
          <button> PROCEED TO paument</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
