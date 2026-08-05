function MapTest() {
  const nums = [1, 2, 3, 4, 5]; //iterator
  return (
    <>
      {nums.map((n) => (
        <div key={n}>{n * 100}</div>
      ))}
    </>
  );
}
export default MapTest;
