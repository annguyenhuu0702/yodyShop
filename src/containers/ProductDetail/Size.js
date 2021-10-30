import React from "react";
import "../../assets/css/productDetail.css";
import "../../assets/css/base.css";

function Size(props) {
  const { size, changeSize, setChangeSize } = props;
  const renderSize = () => {
    if (!size || !size.length) return;
    return size.map((size, index) => (
      <span
        className={
          changeSize === size
            ? "size-content__item active"
            : "size-content__item"
        }
        key={index}
        onClick={() => setChangeSize(size)}
      >
        {size}
      </span>
    ));
  };
  return <div className="size-content">{renderSize()}</div>;
}

export default Size;
