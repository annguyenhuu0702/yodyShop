import React, { useState } from "react";
import "../../assets/css/base.css";
import "../../assets/css/productDetail.css";
import Colors from "./Colors";
import Size from "./Size";
import { castToVnd } from "../../shared/index";
import { useDispatch } from "react-redux";
import * as productsAction from "../../redux/actions/index";
import { Link } from "react-router-dom";

function PviewRight(props) {
  const dispatch = useDispatch();

  const { product, setColor, color } = props;

  const { name, price, priceold, colors, size, colorsName } = product;

  const [changeSize, setChangeSize] = useState();

  const [qtt, setQtt] = useState(1);
  const handleChange = () => {};

  const handleMinus = () => {
    if (qtt > 1) {
      setQtt(qtt - 1);
    }
  };

  const handleAddToCart = (product, qtt) => {
    dispatch(productsAction.actAddToCart(product, qtt));
  };

  return (
    <div className="col-lg-4 col-md-6 pview-right">
      <div className="pview-right-content">
        <h1 className="pview-name">{name}</h1>
        <div className="pview-price">
          <div className="pview-price__new">
            <b>{castToVnd(price)}</b>
          </div>
          <div className="pview-price__old">
            <del>{castToVnd(priceold)}</del>
          </div>
        </div>
        <div className="attr-req color mb-2">
          <div className="attr-color">
            {colors?.length === 0 ? (
              ""
            ) : (
              <label>
                Màu sắc: {colorsName ? colorsName[colors.indexOf(color)] : ""}
              </label>
            )}
          </div>
          <Colors colors={colors} setColor={setColor} color={color} />
        </div>
        <div className="attr-req-size">
          {size?.length !== 0 ? (
            <div className="attr-size">
              <label>Kích cỡ</label>
              <span>{changeSize}</span>
            </div>
          ) : (
            ""
          )}
          {/* <div className="attr-size">
            {size?.length !== 0 ? <label>Kích cỡ: </label> : ""}
            <span>{changeSize}</span>
          </div> */}
          <Size
            size={size}
            changeSize={changeSize}
            setChangeSize={setChangeSize}
          />
        </div>
        <div className="pview-quantity mt-4">
          <label className="mobile-qtt">Số lượng:</label>
          <div className="pview-quantity__box">
            <span className="qtt-action minus" onClick={handleMinus}>
              <i className="far fa-minus"></i>
            </span>
            <input
              type="text"
              value={qtt}
              className="qtt-input"
              onChange={handleChange}
            />
            <span className="qtt-action plus" onClick={() => setQtt(qtt + 1)}>
              <i className="fas fa-plus"></i>
            </span>
          </div>
        </div>
        <div className="pview-total-money">
          <p>Tổng tiền</p>
          <p>{castToVnd(price * qtt)}</p>
        </div>
        <div className="pview-box-btn">
          <div className="add-to-cart">
            <button
              className="btn-add-to-cart"
              onClick={(e) => e.preventDefault()}
            >
              <a href=" " onClick={() => handleAddToCart(product, qtt)}>
                Thêm giỏ hàng
              </a>
            </button>
          </div>
          <div className="buy-now">
            <button className="btn-buy-now">
              <Link to="/cart" onClick={() => handleAddToCart(product, qtt)}>
                Mua ngay
              </Link>
            </button>
          </div>
        </div>
        <div className="pview-web-endow">
          <h2>Ưu đãi website</h2>
          <div className="pview-web-endow__content">
            <p>Giao nhận hàng:</p>
            <ul>
              <li>Phí ship cho mỗi đơn hàng là 20.000Đ</li>
              <li>Miễn phí ship cho đơn hàng từ 498.000Đ</li>
              <li>
                Quý khách hàng được thoải mái thử đồ trước khi nhận hàng và
                thanh toán
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PviewRight;
