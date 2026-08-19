import { useState } from "react";

function SignupPage() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [profile, setProfile] = useState(null);
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
            <input
              type="text"
              placeholder="user id"
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            />
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
