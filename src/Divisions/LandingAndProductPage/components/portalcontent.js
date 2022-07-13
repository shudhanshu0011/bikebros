import React from "react";
import { Button } from "./button/button";
import "./productdetail/productdetail.css";

function PortalContent({ item2, closeModal2, addProductToCart, props }) {
  return (
    <div className="productdetails">
      <div className="prdimg">
        <img src={item2.imageurl}></img>
      </div>
      <div className="prddes">
        <div className="top1">
          <div>{item2.model}</div>
          <div>Rs. {item2.price}</div>
        </div>
        <div className="top2">
          <div>{item2.date}</div>
          <div>{item2.city}</div>
        </div>
        <div className="top3">
          <Button
            onclick={() => closeModal2(false)}
            buttonStyle="btn--primary--outline"
            buttonSize="btn--medium"
          >
            Close
          </Button>
          <Button
            onclick={() => addProductToCart({ ...props })}
            buttonStyle="btn--primary--solid"
            buttonSize="btn--medium"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PortalContent;
