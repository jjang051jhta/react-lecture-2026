import { useState } from "react";
function App() {
  //Hook
  //const [count, setCount] = useState(0);
  // let count = 0;
  // const plus = () => {
  //   count++;
  //   console.log(count);
  // };
  // const minus = () => {
  //   count--;
  //   console.log(count);
  // };
  const [count, setCount] = useState(0);
  const name = "홍길동";
  return (
    <>
      <h1>react로 만든 counter</h1>
      <h2 id="count">{count}</h2>
      <button
        id="plus"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        증가
      </button>
      <button
        id="minus"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        감소
      </button>
    </>
  );
}

export default App;
