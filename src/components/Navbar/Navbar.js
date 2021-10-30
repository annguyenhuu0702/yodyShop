import React from "react";
import "../../assets/css/base.css";
import "../../assets/css/navbar.css";
import { Route, Link } from "react-router-dom";

function Navbar() {
  const menus = [
    {
      name: "TRANG CHỦ",
      to: "/",
      exact: true,
    },
    {
      name: "NAM",
      to: "/nam",
      exact: false,
    },
    {
      name: "NỮ",
      to: "/nu",
      exact: false,
    },
    {
      name: "TRẺ EM",
      to: "/tre-em",
      exact: false,
    },
    {
      name: "KHUYỄN MÃI",
      to: "/khuyen-mai",
      exact: false,
    },
  ];

  const MenuLink = ({ lable, to, activeOnlyWhenExact }) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
          return (
            <li
              className={`nav-menu-list nav-menu-list--separate ${
                match ? "active" : ""
              }`}
            >
              <Link to={to}>{lable}</Link>
            </li>
          );
        }}
      />
    );
  };

  const showMenus = (menus) => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            lable={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="row">
          <ul className="nav-menu">{showMenus(menus)}</ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
