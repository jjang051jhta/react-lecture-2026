import Product from "./Product";

function ProductList({ products }) {
  console.log(products);
  return (
    //배열 메서드 map , filter, reduce 등등
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {products.map((product) => {
        console.log(product);
        return (
          <Product
            key={product.id}
            // src={product.src}
            // name={product.name}
            // price={product.price}
            {...product}
            //product={product}
          />
        );
      })}
    </div>
  );
}
export default ProductList;
