import React, { useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Polyci from "../../components/Policy/Policy";
import HomeProduct from "../HomeProduct/HomeProduct";

function PageHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Carousel></Carousel>
      <Polyci></Polyci>
      <HomeProduct />
    </>
  );
}

export default PageHome;
