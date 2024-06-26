import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {cartItems, food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext)
  const navigate = useNavigate();
  
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
          <p>remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt=""></img>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className="cross">x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
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
              <p>{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
              <div className="cart-total-details">
                <b>total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+20}</b>
              </div>
              <hr />
          </div>
          <button onClick={()=>navigate('/order')}> PROCEED TO CHECK OUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>if you have a promo code , please enter here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code"></input>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
