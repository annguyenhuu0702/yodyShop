import React from "react";
import "./../../assets/css/base.css";
import "../../assets/css/footer.css";

function MainFooter() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 main-ft-block">
            <div className="main-ft-block__about">
              <div className="ft-block__about-content">
                <img
                  src="https://storage.googleapis.com/cdn.nhanh.vn/website/template/538/contentKey/961/yody%201.png"
                  alt=""
                />
                <p>
                  "Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy
                  nghĩ và hành động của mình" là sứ mệnh, chiến lược luôn cùng
                  YODY bước tiến
                </p>
              </div>
            </div>
            <div className="main-ft-block__support">
              <div className="ft-block__support">
                <div className="ft-block__support-title">
                  TỔNG ĐÀI GỌI HỖ TRỢ
                </div>
                <div className="ft-block__support-content">
                  <p>
                    Liên hệ đặt hàng: <strong>024 730 56665</strong>
                  </p>
                  <p>
                    Thắc mắc đơn hàng: <strong>024 730 16661</strong>
                  </p>
                  <p>
                    Gợi ý, khiếu nại: <strong>1800 2086 (Miến phí)</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 main-ft-block main-footer-menu-about">
            <div className="ft-title">VỀ YODY</div>
            <div className="ft-content">
              <ul>
                <li>
                  <a href=" ">Giới thiệu</a>
                </li>
                <li>
                  <a href=" ">Liên hệ</a>
                </li>
                <li>
                  <a href=" ">Tuyển dụng</a>
                </li>
                <li>
                  <a href=" ">Tin tức</a>
                </li>
                <li>
                  <a href=" ">Hệ thống cửa hàng</a>
                </li>
              </ul>
              <a href=" ">
                <img src="" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 main-ft-block main-footer-menu-support">
            <div className="ft-title">HỖ TRỢ KHÁCH HÀNG</div>
            <div className="ft-content">
              <ul>
                <li>
                  <a href=" ">Hướng dẫn chọn size</a>
                </li>
                <li>
                  <a href=" ">Chính sách khách hàng thân thiết</a>
                </li>
                <li>
                  <a href=" ">Chính sách đổi / trả</a>
                </li>
                <li>
                  <a href=" ">Chính sách bảo mật</a>
                </li>
                <li>
                  <a href=" ">Thanh toán, giao nhận</a>
                </li>
                <li>
                  <a href=" ">Kiếm tiền cùng yody</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 main-ft-block">
            <div className="ft-title">CÔNG TY CP THỜI TRANG YODY</div>
            <div className="ft-content">
              <p>Văn phòng: Công ty YODY, Đường An Đinh, TP Hải Dương</p>
              <p>MST: 080106940</p>
              <p>Email: @chamsockhachhangyody.vn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainFooter;
