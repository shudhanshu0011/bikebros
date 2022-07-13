import React from "react";
import ReactDom from "react-dom";
import PortalContent from "../portalcontent";

function ProductDetail({ item, closeModal, addProductToCart, props }) {
  return ReactDom.createPortal(
    <>
      <div className="container14">
        <PortalContent
          item2={item}
          closeModal2={closeModal}
          addProductToCart={addProductToCart}
          props={props}
        />
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default ProductDetail;
