import { useState } from "react";

function App() {
  function hello() {
    alert("hello");
  }
  const hello02 = () => {
    alert("hello arrow function");
  };
  //let msg = "메세지";
  const [msg, setMsg] = useState(""); //useState의 리턴값은 배열
  const [user, setUser] = useState(null);
  async function getUser() {
    const response = await fetch("http://localhost:8080/user");
    const data = await response.json();
    console.log(data);
    setUser(data);
  }
  const [result, setResult] = useState(null);

  const [formData, setFormData] = useState({ name: "", age: 20, major: "" });
  function handleChange(e) {
    //console.log(e.target);
    const { name, value } = e.target;
    //console.log(name, "/", value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    //console.log(formData);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/user", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        age: Number(formData.age),
      }),
    });
    const data = await response.json();
    setResult(data);
  }
  return (
    <>
      <h1>Hello React</h1>
      <button
        onClick={() => {
          alert("click");
        }}
      >
        클릭
      </button>
      <hr />
      {/* callback함수 */}
      <button onClick={hello}>클릭</button>
      <button onClick={hello02}>클릭</button>
      <hr />
      <input
        type="text"
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            console.log("enter 눌렀음");
          }
        }}
      ></input>
      <h2>{msg}</h2>
      <hr></hr>
      <form
        method="post"
        action="/msg"
        onSubmit={(e) => {
          e.preventDefault();
          alert("나는 form의 기본 기능을 막았습니다.");
        }}
      >
        <input type="text"></input>
        <button>전송</button>
      </form>
      <hr></hr>
      <button onClick={getUser}>회원 데이터 가져오기</button>
      {user && (
        <div>
          <h2>{user.name}</h2>
          <h2>{user.major}</h2>
          <h2>{user.age}</h2>
        </div>
      )}
      <hr></hr>
      <h1>회원데이터 전송</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이름</label>
          <input type="text" name="name" onChange={handleChange}></input>
        </div>
        <div>
          <label>나이</label>
          <input type="text" name="age" onChange={handleChange}></input>
        </div>
        <div>
          <label>전공</label>
          <input type="text" name="major" onChange={handleChange}></input>
        </div>
        <div>
          <button>전송</button>
        </div>
      </form>
    </>
  );
}

export default App;
