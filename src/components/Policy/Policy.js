import React from "react";
import "./../../assets/css/base.css";
import "../../assets/css/policy.css";

function Polyci() {
  return (
    <section className="policy">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="policy-item">
              <div className="policy-item__img">
                <img
                  src="https://storage.googleapis.com/cdn.nhanh.vn/store/3138/bn/free-delivery%20(1)%202%20(1).png"
                  alt=""
                />
              </div>
              <div className="policy-content">
                <div className="policy-content__title">Miễn phí giao hàng</div>
                <div className="policy-content__desciption">
                  Miễn phí giao hàng với đơn &gt; 498K
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="policy-item">
              <div className="policy-item__img">
                <img
                  src="https://storage.googleapis.com/cdn.nhanh.vn/store/3138/bn/free-delivery%20(1)%202%20(1).png"
                  alt=""
                />
              </div>
              <div className="policy-content">
                <div className="policy-content__title">Thanh toán COD</div>
                <div className="policy-content__desciption">
                  Thanh toán khi nhận hàng (COD)
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="policy-item">
              <div className="policy-item__img">
                <img
                  src="https://storage.googleapis.com/cdn.nhanh.vn/store/3138/bn/free-delivery%20(1)%202%20(1).png"
                  alt=""
                />
              </div>
              <div className="policy-content">
                <div className="policy-content__title">Khách hàng VIP</div>
                <div className="policy-content__desciption">
                  Ưu đãi dành cho khách hàng víp
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="policy-item">
              <div className="policy-item__img">
                <img
                  src="https://storage.googleapis.com/cdn.nhanh.vn/store/3138/bn/free-delivery%20(1)%202%20(1).png"
                  alt=""
                />
              </div>
              <div className="policy-content">
                <div className="policy-content__title">Hỗ trợ bảo hành</div>
                <div className="policy-content__desciption">
                  Đổi, sữa tại tất cả store YODY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Polyci;
