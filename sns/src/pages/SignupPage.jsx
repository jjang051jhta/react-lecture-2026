import { useState } from "react";
import styles from "../css/SignupPage.module.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function SignupPage() {
  const [userId, setUserId] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [idAvailable, setIdAvailable] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [profile, setProfile] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();
  const handleUserId = async (e) => {
    const value = e.target.value;

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

    if (data.available) {
      setIdMessage("사용 가능한 아이디입니다.");
      setIdAvailable(true);
    } else {
      setIdMessage("이미 사용 중인 아이디입니다.");
      setIdAvailable(false);
    }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setProfile(file);

    // 선택한 이미지의 임시 URL 생성
    const previewUrl = URL.createObjectURL(file);

    setPreview(previewUrl);
  };

  const saveMember = async (e) => {
    e.preventDefault();

    if (!idAvailable) {
      //alert("사용 가능한 아이디를 입력해주세요.");
      toast.error("사용 가능한 아이디를 입력해주세요.");
      return;
    }

    const formData = new FormData();

    formData.append("userId", userId);
    formData.append("userPassword", userPassword);
    formData.append("userName", userName);

    if (profile) {
      formData.append("profile", profile);
    }

    const response = await fetch("http://localhost:8080/api/member/signup", {
      method: "POST",
      body: formData,
    });

    const data = await response.text();

    console.log(data);
    toast.error("회원가입이 되었습니다.");
    navigate("/login");
  };

  return (
    <main className={styles.page}>
      <section className={styles.signupBox}>
        <div className={styles.titleBox}>
          <h1>회원가입</h1>
          <p>새로운 계정을 만들어보세요.</p>
        </div>

        <form className={styles.form} onSubmit={saveMember}>
          {/* 프로필 이미지 */}
          <div className={styles.profileBox}>
            <label htmlFor="profile" className={styles.profileLabel}>
              {preview ? (
                <img
                  src={preview}
                  alt="프로필 미리보기"
                  className={styles.profileImage}
                />
              ) : (
                <div className={styles.profileEmpty}>
                  <span>+</span>
                </div>
              )}
            </label>

            <input
              id="profile"
              type="file"
              accept="image/*"
              className={styles.fileInput}
              onChange={handleImage}
            />

            <p className={styles.profileText}>프로필 이미지 선택</p>
          </div>

          {/* 아이디 */}
          <div className={styles.formGroup}>
            <label htmlFor="userId">아이디</label>

            <input
              id="userId"
              type="text"
              placeholder="아이디를 입력하세요"
              value={userId}
              onChange={handleUserId}
            />

            {idMessage && (
              <p
                className={
                  idAvailable ? styles.successMessage : styles.errorMessage
                }
              >
                {idMessage}
              </p>
            )}
          </div>

          {/* 비밀번호 */}
          <div className={styles.formGroup}>
            <label htmlFor="password">비밀번호</label>

            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>

          {/* 이름 */}
          <div className={styles.formGroup}>
            <label htmlFor="userName">이름</label>

            <input
              id="userName"
              type="text"
              placeholder="이름을 입력하세요"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            회원가입
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignupPage;
