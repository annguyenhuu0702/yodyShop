import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../../assets/css/base.css";
import "../../assets/css/productDetail.css";
import "../../assets/css/responsive.css";
import PviewImage from "./PviewImage";
import PviewRight from "./PviewRight";
import * as productActions from "../../redux/actions/index";

function ProductDetail() {
  const [color, setColor] = useState();
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://json-server-yodyshop.herokuapp.com/data/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(productActions.selectedProduct(response.data));
  };

  useEffect(() => {
    fetchProductDetail(productId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  useEffect(() => {
    setColor(product.colors ? product.colors[0] : "");
  }, [product.colors]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-product__detail col-12">
      <div className="container">
        <div className="row pview-detail col-12">
          <PviewImage product={product} color={color} />
          <PviewRight product={product} setColor={setColor} color={color} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
