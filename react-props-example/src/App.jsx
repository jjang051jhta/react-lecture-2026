import { useState } from "react";
import Product from "./Product";
import ProductList from "./ProductList";
import camera from "./assets/product/camera.jpg";
import shoes from "./assets/product/shoes.jpg";
import headphone from "./assets/product/headphone.jpg";
import MapTest from "./MapTest";
import FilterTest from "./FilterTest";
function App() {
  const products = [
    {
      id: 1,
      name: "헤드폰",
      price: 100000,
      src: headphone,
    },
    {
      id: 2,
      name: "운동화",
      price: 200000,
      src: shoes,
    },
    {
      id: 3,
      name: "카메라",
      price: 100000,
      src: camera,
    },
    {
      id: 4,
      name: "헤드폰",
      price: 100000,
      src: headphone,
    },
    {
      id: 5,
      name: "운동화",
      price: 200000,
      src: shoes,
    },
    {
      id: 6,
      name: "카메라",
      price: 100000,
      src: camera,
    },
    {
      id: 7,
      name: "헤드폰",
      price: 100000,
      src: headphone,
    },
    {
      id: 8,
      name: "운동화",
      price: 200000,
      src: shoes,
    },
    {
      id: 9,
      name: "카메라",
      price: 100000,
      src: camera,
    },
    {
      id: 10,
      name: "헤드폰",
      price: 100000,
      src: headphone,
    },
    {
      id: 11,
      name: "운동화",
      price: 200000,
      src: shoes,
    },
    {
      id: 12,
      name: "카메라",
      price: 100000,
      src: camera,
    },
    {
      id: 13,
      name: "헤드폰",
      price: 100000,
      src: headphone,
    },
    {
      id: 14,
      name: "운동화",
      price: 200000,
      src: shoes,
    },
    {
      id: 15,
      name: "카메라",
      price: 100000,
      src: camera,
    },
  ];
  return (
    <>
      <ProductList products={products}></ProductList>
      <MapTest></MapTest>
      <FilterTest></FilterTest>
    </>
  );
}

export default App;
