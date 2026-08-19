import { useState } from "react";

function SignupPage() {
  const [userId, setUserId] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [idAvailable, setIdAvailable] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [profile, setProfile] = useState(null);

  const handleUserId = async (e) => {
    const value = e.target.value;
    console.log(value);
    setUserId(value);
    if (value.trim() === "") {
      setIdMessage("");
      setIdAvailable(false);
      return;
    }
    const response = await fetch(
      `http://localhost:8080/api/member/check-userid?userId=${value}`,
    );
    const data = await response.json();
    console.log(data);
    if (data.available) {
      setIdMessage("사용가능한 아이디입니다.");
      setIdAvailable(true);
    } else {
      setIdMessage("이미 사용중인 아이디입니다.");
      setIdAvailable(false);
    }
  };
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setProfile(file);
  };
  const saveMember = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("userPassword", userPassword);
    formData.append("userName", userName);
    if (profile) {
      formData.append("profile", profile);
    }
    const response = await fetch("http://localhost:8080/api/member/signup", {
      method: "post",
      body: formData,
    });
    const data = await response.text();
    console.log(data);
  };
  return (
    <>
      <h1>Signup</h1>
      <section>
        <form onSubmit={saveMember}>
          <div>
            <input type="text" placeholder="user id" onChange={handleUserId} />
          </div>
          <div style={{ color: idAvailable ? "green" : "red" }}>
            {idMessage}
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="user name"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="file"
              placeholder="profile image"
              onChange={handleImage}
            />
          </div>
          <div>
            <button>회원가입</button>
          </div>
        </form>
      </section>
    </>
  );
}
export default SignupPage;
