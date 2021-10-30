import React, { useState } from "react";
import "../../assets/css/sideBar.css";

function SideBar() {
  const [toggle, setToggle] = useState({
    toggle1: false,
    toggle2: false,
    toggle3: false,
  });

  const onToogleSb1 = () => {
    setToggle({ ...toggle, toggle1: !toggle.toggle1 });
  };

  const onToogleSb2 = () => {
    setToggle({ ...toggle, toggle2: !toggle.toggle2 });
  };

  const onToogleSb3 = () => {
    setToggle({ ...toggle, toggle3: !toggle.toggle3 });
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
        <div
          className={`category-widget-detail ${toggle.toggle1 ? "hidden" : ""}`}
        >
          <ul className="category-widget-detail-list">
            <li>
              <a onClick={(e) => e.preventDefault()} href=" ">
                Tất cả
              </a>
            </li>
            <li>
              <a onClick={(e) => e.preventDefault()} href=" ">
                Áo nam
              </a>
            </li>
            <li>
              <a onClick={(e) => e.preventDefault()} href=" ">
                Quần nam
              </a>
            </li>
            <li>
              <a onClick={(e) => e.preventDefault()} href=" ">
                Phụ kiện nam
              </a>
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
        <div
          className={`category-widget-detail ${toggle.toggle2 ? "hidden" : ""}`}
        >
          <ul className="category-widget-detail-list">
            <li>
              {/* <i className="far fa-square"></i> */}
              <input type="checkbox" name="" value="" />
              <a onClick={(e) => e.preventDefault()} href=" ">
                Dưới 300.000
              </a>
            </li>
            <li>
              {/* <i className="far fa-square"></i> */}
              <input type="checkbox" name="" value="" />
              <a onClick={(e) => e.preventDefault()} href=" ">
                300.000 - 500.000
              </a>
            </li>
            <li>
              {/* <i className="far fa-square"></i> */}
              <input type="checkbox" name="" value="" />
              <a onClick={(e) => e.preventDefault()} href=" ">
                500.000 - 1.000.000
              </a>
            </li>
            <li>
              {/* <i className="far fa-square"></i> */}
              <input type="checkbox" name="" value="" />
              <a onClick={(e) => e.preventDefault()} href=" ">
                1.000.000 - 5.000.000
              </a>
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
        <div
          className={`category-widget-detail ${toggle.toggle3 ? "hidden" : ""}`}
        >
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
