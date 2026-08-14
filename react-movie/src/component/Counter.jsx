import useCountStore from "../store/useCountStore";
function Counter() {
  const count = useCountStore((state) => state.count);
  const increase = useCountStore((state) => state.increase);
  const decrease = useCountStore((state) => state.decrease);
  return (
    <>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <h1>count : {count}</h1>
    </>
  );
}
export default Counter;
