import React, { useContext } from "react";
import "./Header.css";
import { cartData } from "../../Data/Data";
import { flappy } from "../../Context/Context";
import { MdOutlineCancel } from "react-icons/md";

const Cart = () => {
  const { handleClick, color } = useContext(flappy);

  return (
    <div id="cart-box">
      <div className="box-title">
        <p>Shopping Cart</p>
        <div onClick={() => handleClick("")}>
          <MdOutlineCancel style={{ cursor: "pointer", color: color }} />
        </div>
      </div>
      <div className="cart-holder">
        <div className="carts">
          {cartData.map((data) => {
            return (
              <div className="indi-cart">
                <div
                  className="prod-img"
                  style={{ backgroundImage: `url(${data.image})` }}
                ></div>
                <div className="prod-name">
                  <p>{data.name}</p>
                  <span>Electronic</span>
                  <div className="price">
                    <p>{data.price}</p>
                    <div className="quantizer">
                      <p style={{ color: "red", fontWeight: "600" }}>-</p>
                      <p>1</p>
                      <p style={{ color: "green", fontWeight: "600" }}>+</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <button style={{ backgroundColor: color }}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
