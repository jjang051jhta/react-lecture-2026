import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";
import Search from "./Search";
function Header() {
  return (
    <>
      <header className={styles.header}>
        <button className={styles.button} onClick={() => history.back()}>
          <MdArrowBackIos size={30} />
        </button>
        <h1 className={styles.title}>
          <Link to="/">MOVIE APP</Link>
        </h1>
        <Search className={styles.search}></Search>
      </header>
    </>
  );
}
export default Header;
