import { useState } from "react";
import Product from "./Product";
import ProductList from "./ProductList";
import camera from "./assets/product/camera.jpg";
import shoes from "./assets/product/shoes.jpg";
import headphone from "./assets/product/headphone.jpg";
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
  ];
  return (
    <>
      <ProductList products={products}></ProductList>
    </>
  );
}

export default App;
