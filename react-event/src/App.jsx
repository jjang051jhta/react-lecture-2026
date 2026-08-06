import { useState } from "react";

function App() {
  const key = "age";
  const person = { name: "홍길동", age: 32 };
  console.log(person.name, "/", person["name"]);
  console.log(person.age, "/", person["age"]);
  console.log(person[key]);

  const person02 = {
    key: "노홍철",
  };
  console.log(person02);
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

  const [formData, setFormData] = useState({
    name: "정준하",
    age: 20,
    major: "수학",
  });
  function handleChange(e) {
    //console.log(e.target);
    const { name, value } = e.target;
    //console.log(name, "/", value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // if (name === "name") {
    //   setFormData((prev) => ({
    //     ...prev,
    //     name: value,
    //   }));
    // }
    // if (name === "age") {
    //   setFormData((prev) => ({
    //     ...prev,
    //     age: value,
    //   }));
    // }
    // if (name === "major") {
    //   setFormData((prev) => ({
    //     ...prev,
    //     major: value,
    //   }));
    // }
    console.log(formData);
  }
  async function handleSubmit(e) {
    e.preventDefault(); //새로고침되는 동작을 방지
    const response = await fetch("http://localhost:8080/user", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      // {
      //   name:"유재석",
      //   age:"32",
      //   major:"개그"
      // }
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
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>나이</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>전공</label>
          <input
            type="text"
            name="major"
            value={formData.major}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <button>전송</button>
        </div>
      </form>
      {result && (
        <div>
          <h2>{result.name}</h2>
          <h2>{result.age}</h2>
          <h2>{result.major}</h2>
        </div>
      )}
    </>
  );
}

export default App;
