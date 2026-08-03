import { useState } from "react";

function ChangeName() {
  //let name = "홍길동";
  //상태 변경을 하고 싶다면 useState라는 hook을 사용해야 한다.
  const [name, setName] = useState("장성호");
  return (
    <>
      <h1>이름을 바꿔 봅시다.</h1>
      <input
        type="text"
        onChange={function (e) {
          setName(e.target.value);
        }}
      ></input>
      <h2>입력하신 이름은 {name}</h2>
    </>
  );
}
export default ChangeName;
