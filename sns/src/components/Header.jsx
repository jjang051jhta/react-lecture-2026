import { Link, useNavigate } from "react-router-dom";
import styles from "../css/Header.module.css";
import { useEffect, useState } from "react";
import useAuthStore from "../store/useAuthStore";
import toast from "react-hot-toast";

function Header() {
  const navigate = useNavigate();
  const accessToken = useAuthStore((state) => state.accessToken);
  const logout = useAuthStore((state) => state.logout);
  const [member, setMember] = useState(null);
  const handleLogOut = () => {
    logout();
    toast.success("로그아웃되었습니다.");
    navigate("/login");
  };
  const handleSearch = (e) => {
    e.preventDefault();

    const keyword = e.target.keyword.value;

    console.log("검색어:", keyword);
  };
  useEffect(() => {
    if (!accessToken) {
      setMember(null);
      return;
    }
    console.log("무한루프.....");
    const loadMember = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/auth/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        console.log("me===", data);
        if (!response.ok) {
          logout();
          setMember(null);
          return;
        }
        setMember(data.data);
      } catch (error) {
        logout();
        setMember(null);
      }
    };
    loadMember();
  }, [accessToken, logout]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* 로고 */}
        <h1 className={styles.logo}>
          <Link to="/">SNS</Link>
        </h1>

        {/* 검색 */}
        <form className={styles.search} onSubmit={handleSearch}>
          <input type="text" name="keyword" placeholder="검색어를 입력하세요" />

          <button type="submit">검색</button>
        </form>

        {/* 메뉴 */}

        <nav className={styles.nav}>
          {member ? (
            <>
              <span>{member.userName}</span>
              <button onClick={handleLogOut}>로그아웃</button>
            </>
          ) : (
            <>
              <Link to="/login" className={styles.login}>
                로그인
              </Link>

              <Link to="/signup" className={styles.signup}>
                회원가입
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
