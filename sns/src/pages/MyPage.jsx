import { useEffect, useState } from "react";
import styles from "../css/SignupPage.module.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuthStore from "../store/useAuthStore";
function MyPage() {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [profile, setProfile] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();
  const accessToken = useAuthStore((state) => state.accessToken);
  const logout = useAuthStore((state) => state.logout);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setProfile(file);

    // 선택한 이미지의 임시 URL 생성
    const previewUrl = URL.createObjectURL(file);

    setPreview(previewUrl);
  };

  const updateMember = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("userName", userName);

    if (profile) {
      formData.append("profile", profile);
    }
    //http method  post / get / delete / put
    try {
      const response = await fetch("http://localhost:8080/api/member/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        method: "PUT",
        body: formData,
      });

      const data = await response.json();
      console.log("response", response);
      if (!response.ok) {
        console.log(data);
        toast.error(data.message || "회원정보가 수정 실패했습니다.");
        return;
      }
      toast.success("회원정보가 수정되었습니다.");
    } catch (error) {
      console.log(error);
      toast.error("회원정보 수정 중 오류가 발생했습니다.");
    }
  };
  useEffect(() => {
    if (!accessToken) {
      toast.error("로그인이 필요합니다.");
      navigate("/login");
      return;
    }
    const loadMember = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/auth/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        if (!response.ok) {
          toast.error(data.message || "회원정보를 불러올 수 없습니다.");
          logout();
          navigate("/login");
          return;
        }
        setUserId(data.data.userId);
        setUserName(data.data.userName);
        if (data.data.profile) {
          setPreview(`http://localhost:8080${data.data.profile}`);
        }
      } catch (error) {
        console.log(error);
        toast.error("회원정보 조회 중 오류가 발생했습니다.");
      }
    };
    loadMember();
  }, [navigate, accessToken, logout]);
  return (
    <main className={styles.page}>
      <section className={styles.signupBox}>
        <div className={styles.titleBox}>
          <h1>회원정보 수정</h1>
          <p>이름과 프로필 이미지를 수정할 수 있습니다.</p>
        </div>

        <form className={styles.form} onSubmit={updateMember}>
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
              disabled
            />
          </div>

          {/* 비밀번호 */}
          {/* <div className={styles.formGroup}>
            <label htmlFor="password">비밀번호</label>

            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div> */}

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
            회원정보 수정
          </button>
        </form>
      </section>
    </main>
  );
}

export default MyPage;
