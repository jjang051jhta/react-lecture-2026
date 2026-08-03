import { useState } from "react";

function LoginState() {
  //let isLogin = false;
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <h1>{isLogin ? "로그인" : "로그아웃"}</h1>
      <button
        onClick={() => {
          setIsLogin(!isLogin);
          console.log(isLogin);
        }}
      >
        {!isLogin ? "login" : "logout"}
      </button>
    </>
  );
}
export default LoginState;
