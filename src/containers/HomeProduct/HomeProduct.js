import React, { useEffect } from "react";
import "../../assets/css/base.css";
import "../../assets/css/homeProduct.css";
import "../../assets/css/responsive.css";
import HomeProductItem from "./HomeProductItem";
import { useSelector, useDispatch } from "react-redux";
import * as productsAction from "../../redux/actions/index";

function HomeProduct() {
  const products = useSelector((state) => state.allproducts.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsAction.actFetchDataRequest());
  }, [dispatch]);

  return (
    <div className="home-product">
      <div className="container">
        <div className="row justify-content-center mb-5 mt-5">
          <h2>THỜI TRANG YODY</h2>
        </div>
        <div className="row">
          <HomeProductItem producstItem={products} />
        </div>
      </div>
    </div>
  );
}

export default HomeProduct;
