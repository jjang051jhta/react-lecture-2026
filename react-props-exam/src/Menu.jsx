function Menu({ title, price, category }) {
  return (
    <>
      <div>
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{category}</p>
      </div>
    </>
  );
}
export default Menu;
