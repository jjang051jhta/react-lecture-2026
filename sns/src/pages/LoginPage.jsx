import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/LoginPage.module.css";

function LoginPage() {
  return (
    <main className={styles.page}>
      <section className={styles.loginBox}>
        {/* 제목 */}
        <div className={styles.titleBox}>
          <h1>로그인</h1>
          <p>SNS에 로그인하세요.</p>
        </div>

        {/* 로그인 FORM */}
        <form className={styles.form}>
          {/* 아이디 */}
          <div className={styles.formGroup}>
            <label htmlFor="userId">아이디</label>

            <input id="userId" type="text" placeholder="아이디를 입력하세요" />
          </div>

          {/* 비밀번호 */}
          <div className={styles.formGroup}>
            <label htmlFor="userPassword">비밀번호</label>

            <input
              id="userPassword"
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          <button type="submit" className={styles.loginButton}>
            로그인
          </button>
        </form>

        {/* 회원가입 */}
        <div className={styles.signupGuide}>
          <span>아직 회원이 아니신가요?</span>

          <Link to="/signup">회원가입</Link>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
