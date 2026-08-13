import { MdSearch } from "react-icons/md";
import styles from "../css/Search.module.css";
function Search() {
  return (
    <>
      <div className={styles["search-box"]}>
        <input type="text" placeholder="search movie" />
        <button className={styles.button}>
          <MdSearch size={30}></MdSearch>
        </button>
      </div>
    </>
  );
}
export default Search;
