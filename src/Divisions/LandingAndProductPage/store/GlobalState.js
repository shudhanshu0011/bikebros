import React, { useReducer, useEffect, useState } from "react";
import axios from "axios";
import data from "../data";

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL_FROM_CART } from "./types";
import Context from "./Context";
import Reducer from "./Reducer";

export default function GlobalState(props) {
  //delete line 11 if using line 13-21 for get request
  const products = data.products;

  // const [products, setProducts] = useState([]);
  // // Set proxy in package.json
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.get("/productlist");
  //     setProducts(data);
  //   };
  //   fetchData();
  // }, []);

  const [state, dispatch] = useReducer(Reducer, { carts: [] });

  // # add product to cart
  const addProductToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };

  // # remove product from cart
  const removeProductFromCart = (productID) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productID,
    });
  };

  // # clear all product from cart
  const clearCart = () => {
    dispatch({
      type: CLEAR_ALL_FROM_CART,
    });
  };

  return (
    <Context.Provider
      value={{
        products: products,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        clearCart: clearCart,
        carts: state.carts,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
