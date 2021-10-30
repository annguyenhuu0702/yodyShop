import React, { useState } from "react";
import "../../assets/css/sideBar.css";

function SideBar() {
  const [toogleSb1, setToogleSb1] = useState(false);
  const [toogleSb2, setToogleSb2] = useState(false);
  const [toogleSb3, setToogleSb3] = useState(false);

  const onToogleSb1 = () => {
    setToogleSb1(!toogleSb1);
  };

  const onToogleSb2 = () => {
    setToogleSb2(!toogleSb2);
  };

  const onToogleSb3 = () => {
    setToogleSb3(!toogleSb3);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-category-widget">
        <div className="category-widget-title">
          <h4>DANH MỤC SẢN PHẨM</h4>
          <div className="category-widget-icon" onClick={onToogleSb1}>
            <i className="fal fa-sort-down"></i>
          </div>
        </div>
        <div className={`category-widget-detail ${toogleSb1 ? "hidden" : ""}`}>
          <ul className="category-widget-detail-list">
            <li>
              <a href=" ">Áo nữ</a>
            </li>
            <li>
              <a href=" ">Quần nữ</a>
            </li>
            <li>
              <a href=" ">Váy nữ</a>
            </li>
            <li>
              <a href=" ">Phụ kiện nữ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-category-widget">
        <div className="category-widget-title">
          <h4>GIÁ</h4>
          <div className="category-widget-icon" onClick={onToogleSb2}>
            <i className="fal fa-sort-down"></i>
          </div>
        </div>
        <div className={`category-widget-detail ${toogleSb2 ? "hidden" : ""}`}>
          <ul className="category-widget-detail-list">
            <li>
              <i className="far fa-square"></i>
              <a href=" ">Dưới 300.000</a>
            </li>
            <li>
              <i className="far fa-square"></i>
              <a href=" ">300.000 - 500.000</a>
            </li>
            <li>
              <i className="far fa-square"></i>
              <a href=" ">500.000 - 1.000.000</a>
            </li>
            <li>
              <i className="far fa-square"></i>
              <a href=" ">1.000.000 - 5.000.000</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-category-widget">
        <div className="category-widget-title">
          <h4>KÍCH CỠ</h4>
          <div className="category-widget-icon" onClick={onToogleSb3}>
            <i className="fal fa-sort-down"></i>
          </div>
        </div>
        <div className={`category-widget-detail ${toogleSb3 ? "hidden" : ""}`}>
          <ul className="category-widget-detail-list">
            <li>
              <i className="far fa-square"></i>
              <a href=" ">S</a>
            </li>
            <li>
              <i className="far fa-square"></i>
              <a href=" ">M</a>
            </li>
            <li>
              <i className="far fa-square"></i>
              <a href=" ">L</a>
            </li>
            <li>
              <i className="far fa-square"></i>
              <a href=" ">28</a>
            </li>
            <li>
              <i className="far fa-square"></i>
              <a href=" ">29</a>
            </li>
            <li>
              <i className="far fa-square"></i>
              <a href=" ">30</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
