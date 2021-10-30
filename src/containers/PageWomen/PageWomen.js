import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Policy from "../../components/Policy/Policy";
import ProductWomen from "./ProductWomen";
import { useSelector, useDispatch } from "react-redux";
import * as productsAction from "../../redux/actions/index";

function PageWomen(props) {
  const products = useSelector((state) => state.allproducts.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsAction.actFetchDataRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [productWomen, setProductWomen] = useState(products);
  useEffect(() => {
    const listProducts = products.filter((product) => product.type === "nu");
    setProductWomen(listProducts);
  }, [products]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Policy />
      <div className="page-women">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 mobile-sidebar">
              <SideBar />
            </div>
            <div className="col-lg-9 col-md-8">
              <ProductWomen productWomen={productWomen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageWomen;
