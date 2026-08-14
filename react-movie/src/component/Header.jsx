import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";
import Search from "./Search";
import useMovieStore from "../store/useMovieStore";
function Header({ fetchMovies }) {
  //const setKeyword = useMovieStore((state) => state.setKeyword);
  const setKeyword = useMovieStore((state) => state.setKeyword);

  return (
    <>
      <header className={styles.header}>
        <button className={styles.button} onClick={() => history.back()}>
          <MdArrowBackIos size={30} />
        </button>
        <h1 className={styles.title}>
          <Link to="/" onClick={() => setKeyword("")}>
            MOVIE APP
          </Link>
        </h1>
        <Search className={styles.search} fetchMovies={fetchMovies}></Search>
      </header>
    </>
  );
}
export default Header;
