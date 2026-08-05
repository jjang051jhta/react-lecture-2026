import Product from "./Product";

function ProductList({ products }) {
  return products.map((p) => <Product {...p}></Product>);
}
export default ProductList;
