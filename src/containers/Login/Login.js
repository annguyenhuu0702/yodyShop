import React, { useEffect } from "react";
import "../../assets/css/login.css";
import { Link } from "react-router-dom";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page-login">
      <div className="overlay-bg"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 tab-logo-user">
            <p>
              <img
                className="w-75"
                src="https://storage.googleapis.com/cdn.nhanh.vn/website/template/538/contentKey/6941/lo_g0yody.png"
                alt=""
              />
            </p>
            <div className="content-tab-logo">
              <h1>YODY Xin Chào!</h1>
              <div>
                <p>
                  Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy
                  nghĩ và hành động của mình là sứ mệnh, là triết lý, chiến
                  lược... luôn cùng Yody tiến bước!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-7 tab-action-user">
            <form className="formAcount">
              <h1>ĐĂNG NHẬP</h1>
              <p>
                Nếu chưa có tài khoản,{" "}
                <Link to="/user/singup">đăng kí tại đây</Link>
              </p>
              <div className="row form-group">
                <label className="col-lg-12">Email của bạn:</label>
                <div className="col-lg-12 form-input">
                  <input
                    className="col-lg-12 form-control"
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="row form-group">
                <label className="col-lg-12">Mật khẩu:</label>
                <div className="col-lg-12 form-input">
                  <input
                    className="col-lg-12 form-control"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="row justify-content-end form-group">
                <a href=" ">Quên mật khẩu?</a>
              </div>
              <div className="row form-group">
                <div className="form-group-login col-lg-12">
                  <button type="" className="col-lg-12">
                    <a href=" ">Đăng nhập</a>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
