import React, { useContext } from "react";
import SingleProduct from "../components/IndividualProducts/SingleProducts";
import DummyData from "../data/index";
const ProductsPage = () => {
  console.log(DummyData);
  const allProducts = DummyData.arrayOfProducts.map((product) => {
    return <SingleProduct {...product}></SingleProduct>;
  });
  return <div>{allProducts}</div>;
};

export default ProductsPage;
