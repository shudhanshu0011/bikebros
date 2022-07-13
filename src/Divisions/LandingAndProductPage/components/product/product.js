import React from "react";
import { useState } from "react";
import "../product/product.css";
import { Button } from "../button/button";
import ProductDetail from "../productdetail/productdetail";

function Product({ addProductToCart, ...props }) {
  const [openModal, setOpen] = useState(false);
  return (
    <div className="container13">
      <div key={props.id} className="productcard">
        <div className="carddtop">
          <div className="deetails0" href={`/product/${props.id}`}>
            {props.model}
          </div>
          <Button
            className="viewdetailsbtn"
            type="button"
            buttonStyle="btn--primary--outline"
            buttonSize="btn--small"
            onclick={() => {
              setOpen(true);
            }}
          >
            View Details
          </Button>
        </div>
        <div className="bikeeimg" href={`/product/${props.id}`}>
          <img src={props.imageurl} />
        </div>
        <div className="cardbody">
          <div className="deetails1">
            <div href={`/product/${props.id}`}>{props.city}</div>
            <div href={`/product/${props.id}`}>{props.date}</div>
            <div className="deetails01" href={`/product/${props.id}`}>
              Rs. {props.price}
            </div>
          </div>

          <div className="deetails2">
            <Button
              className="addcartbtn"
              type="button"
              buttonStyle="btn--primary--cart"
              buttonSize="btn--cart"
              onclick={() => addProductToCart({ ...props })}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      {openModal && (
        <ProductDetail
          item={props}
          closeModal={setOpen}
          addProductToCart={addProductToCart}
          props={props}
        />
      )}
    </div>
  );
}

export default Product;
