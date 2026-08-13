import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";
import Search from "./Search";
function Header({ fetchMovies, keyword, setKeyword }) {
  return (
    <>
      <header className={styles.header}>
        <button className={styles.button} onClick={() => history.back()}>
          <MdArrowBackIos size={30} />
        </button>
        <h1 className={styles.title}>
          <Link to="/">MOVIE APP</Link>
        </h1>
        <Search
          className={styles.search}
          fetchMovies={fetchMovies}
          keyword={keyword}
          setKeyword={setKeyword}
        ></Search>
      </header>
    </>
  );
}
export default Header;
