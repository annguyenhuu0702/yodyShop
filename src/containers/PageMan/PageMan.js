import React, { useEffect, useState } from "react";
import Policy from "../../components/Policy/Policy";
import SideBar from "./SideBar";
import ProductMan from "./ProductMan";
import { useDispatch, useSelector } from "react-redux";
import * as productsAction from "../../redux/actions/index";

function PageMan() {
  const products = useSelector((state) => state.allproducts.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsAction.actFetchDataRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [productMan, setProductMan] = useState(products);
  useEffect(() => {
    const listProducts = products.filter((product) => product.type === "nam");
    setProductMan(listProducts);
  }, [products]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Policy />
      <div className="page-man">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 mobile-sidebar">
              <SideBar />
            </div>
            <div className="col-lg-9 col-md-8">
              <ProductMan productMan={productMan} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageMan;
