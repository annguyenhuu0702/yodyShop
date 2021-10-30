import React from "react";
import "../../assets/css/base.css";
import "../../assets/css/productChildren.css";
import { Link } from "react-router-dom";
import { castToVnd } from "../../shared/index";

function ProductChildren(props) {
  const { productChildren } = props;
  const showProductChildren = productChildren.map((product) => {
    const { id, name, image, price, priceold } = product;
    return (
      <div
        className="col-lg-4 col-md-6 col-6 product-children__wrapper"
        key={id}
      >
        <Link to={`product/${id}`}>
          <div className="product-img">
            <img className="w-100" src={image} alt="" />
          </div>
          <div className="product-detail">
            <div className="product-detail__name">
              <span className="hide-dot">{name}</span>
            </div>
            <div className="product-detail__price">
              <b>{castToVnd(price)}</b>
              <del>{castToVnd(priceold)}</del>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <div className="row product-children">{showProductChildren}</div>;
}

export default ProductChildren;
