import { MdSearch } from "react-icons/md";
import styles from "../css/Search.module.css";
function Search({ searchMovie, keyword, setKeyword }) {
  return (
    <>
      <div className={styles["search-box"]}>
        <input
          type="text"
          placeholder="search movie"
          onChange={(e) => {
            console.log(e.target.value);
            setKeyword(e.target.value);
          }}
          value={keyword}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              //console.log("enter");
              searchMovie();
            }
          }}
        />
        <button className={styles.button}>
          <MdSearch size={30}></MdSearch>
        </button>
      </div>
    </>
  );
}
export default Search;
