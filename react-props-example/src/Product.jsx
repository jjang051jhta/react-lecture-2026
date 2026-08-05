function Product({ src, name, price }) {
  return (
    <>
      <div
        style={{
          width: "250px",
          border: "1px solid #eee",
          backgroundColor: "#fff",
          padding: "10px",
        }}
      >
        <img src={src} style={{ width: "100%" }}></img>
        <h2>{name}</h2>
        <h3>{price}</h3>
      </div>
    </>
  );
}
export default Product;
