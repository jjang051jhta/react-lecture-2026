import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    userId: "",
    userPw: "",
    userName: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/member/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await response.text();
    console.log(result);
    if (result === "ok") {
      alert("회원가입 성공");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>아이디</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>이름</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>패스워드</label>
          <input
            type="password"
            name="userPw"
            value={formData.userPw}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <button>회원가입</button>
        </div>
      </form>
    </>
  );
}
export default Signup;
