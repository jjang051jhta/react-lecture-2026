function FilterTest() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {nums
        .filter((n) => {
          if (n % 2 === 0) {
            return true;
          } else {
            return false;
          }
        })
        .map((n) => (
          <div key={n}>{n}</div>
        ))}
    </>
  );
}
export default FilterTest;
