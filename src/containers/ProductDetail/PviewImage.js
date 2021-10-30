import React from "react";

function PviewImage(props) {
  const { product, color } = props;
  const { images, description } = product;
  return (
    <div className="col-lg-8 col-md-6 col-12 pview-img">
      <div className="row pview-img-wrapper">
        <div className="col-lg-9 pview-main-img">
          {images && (
            <img className="w-100 mt-4 mb-4" src={images[color]} alt="" />
          )}
        </div>
      </div>
      <div className="row pview-product__content">
        <div className="col-12">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <span>Chi tiết sản phẩm</span>
            </li>
          </ul>
          <div className="tabs-product-content">
            <div className="tpc-detail">
              <div className="tpc-detail__content">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PviewImage;
