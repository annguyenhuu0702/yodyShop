import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "../../assets/css/base.css";
import "../../assets/css/cart.css";
import CartItem from "./CartItem";
import { castToVnd } from "../../shared";

function Cart() {
  const products = useSelector((state) => state.cart.cartItem);
  const qttProduct = products.length;

  let subTotal = 0;
  products.map((pr) => {
    return (subTotal += pr.quantity * pr.price);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cart">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 cart-left">
            <div className="cart">
              <div className="cart-left-detail">
                {qttProduct > 0 ? (
                  <CartItem />
                ) : (
                  <h1>Giỏ hàng của bạn đang trống</h1>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-4 cart-right">
            <div className="cart-right-content">
              <div className="cart-wrapper">
                <div className="cart-right-title">
                  Bạn đang có {qttProduct} sản phẩm trong giỏ hàng
                </div>
                <div className="cart-right-sub-total">
                  <p>Thành tiền</p>
                  <span>{castToVnd(subTotal)}</span>
                </div>
              </div>
              <div className="cart-btn">
                <button className="btn-buy-now page-cart">
                  <a href=" ">Hoàn tất đơn hàng</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
