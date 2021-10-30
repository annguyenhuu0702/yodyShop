import React from "react";
import "./../../assets/css/base.css";
import "../../assets/css/footer.css";

function FooterSubscribe() {
  return (
    <div className="footer-subscribe">
      <div className="container">
        <div className="row footer-subscribe-wrapper">
          <div className="col-lg-6 ft-subs-left">
            <h4 className="ft-subs-left__title">ĐĂNG KÝ ĐỂ NHẬN THÔNG TIN</h4>
            <div className="ft-subs-left__description">
              <p>
                Đăng ký ngay để là người đầu tiên cập nhật sớm nhất những tin
                tức thời trang, những bộ sưu tập cũng như ưu đãi hấp dẫn từ YODY
              </p>
            </div>
          </div>
          <div className="col-lg-6 ft-subs-right">
            <form className="ft-subs-right__form">
              <div className="ft-subs-right__form-wrapper">
                <input
                  type="text"
                  className="ft-subs-right__email"
                  placeholder="Nhập email đăng ký của bạn"
                />
                <button type="button" className="ft-subs-right__btn">
                  Đăng ký
                </button>
              </div>
              <label className="ft-subs-right__form-lable">
                <input type="checkbox" />
                Tôi đồng ý nhận mail từ yody
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSubscribe;
