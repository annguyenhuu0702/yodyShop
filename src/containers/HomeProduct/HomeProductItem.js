import React, { useState } from "react";
import { Link } from "react-router-dom";
import { castToVnd } from "../../shared/index";

function HomeProductItem(props) {
  const { producstItem } = props;

  const [visible, setVisible] = useState(12);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const renderProducts = producstItem.slice(0, visible).map((product) => {
    const { id, name, image, price, priceold } = product;
    return (
      <div className="col-lg-3 col-md-4 col-6 product-wrapper" key={id}>
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
  return (
    <>
      {renderProducts}
      <div className="row load-more">
        <button className="btn-lg btn-load__more" onClick={showMoreItems}>
          Load more
        </button>
      </div>
    </>
  );
}

export default HomeProductItem;
