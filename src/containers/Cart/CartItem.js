import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { castToVnd } from "../../shared";
import * as poductsAction from "../../redux/actions/index";
import { Link } from "react-router-dom";

function CartItem() {
  const products = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();

  const handleQtt = () => {};

  const handleRemoveProductCart = (product) => {
    dispatch(poductsAction.actRemoveProductCart(product));
  };

  const renderCartItem = products.map((product, index) => {
    const { id, name, image, price, priceold, quantity } = product;
    return (
      <div className="product-cart-item" key={index}>
        <div className="cart-img">
          <img src={image} alt="" />
        </div>
        {/* cart detail mobile */}
        <div className="cart-detail-mobile">
          <Link to={`product/${id}`}>{name}</Link>
          <div className="cart-price">
            <div className="cart-price__new">{castToVnd(price)}</div>
            <del className="cart-price__old">{castToVnd(priceold)}</del>
          </div>
          <div className="cart-qtt">
            <span
              className="qtt-action minus"
              onClick={() => dispatch({ type: "DEC", payload: id })}
            >
              <i className="far fa-minus"></i>
            </span>
            <input
              className="qtt-input"
              value={quantity}
              onChange={handleQtt}
            />
            <span
              className="qtt-action plus"
              onClick={() => dispatch({ type: "INC", payload: id })}
              // onClick={() => handleINC(product)}
            >
              <i className="fas fa-plus"></i>
            </span>
            <span
              className="mobile-cart-delete"
              onClick={() => handleRemoveProductCart(product)}
            >
              Xóa
            </span>
          </div>
        </div>
        <div className="cart-detail">
          <div className="cart-name">
            <Link to={`product/${id}`}>{name}</Link>
            <p onClick={() => handleRemoveProductCart(product)}>Xóa</p>
          </div>
          <div className="cart-price">
            <div className="cart-price__new">{castToVnd(price)}</div>
            <del className="cart-price__old">{castToVnd(priceold)}</del>
          </div>
          <div className="cart-qtt">
            <span
              className="qtt-action minus"
              onClick={() => dispatch({ type: "DEC", payload: id })}
            >
              <i className="far fa-minus"></i>
            </span>
            <input
              className="qtt-input"
              value={quantity}
              onChange={handleQtt}
            />
            <span
              className="qtt-action plus"
              onClick={() => dispatch({ type: "INC", payload: id })}
            >
              <i className="fas fa-plus"></i>
            </span>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderCartItem}</>;
}

export default CartItem;
