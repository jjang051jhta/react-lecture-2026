import { MdSearch } from "react-icons/md";
import styles from "../css/Search.module.css";
import useCountStore from "../store/useCountStore";
function Search({ fetchMovies, keyword, setKeyword }) {
  const count = useCountStore((state) => state.count);
  const increase = useCountStore((state) => state.increase);
  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={increase}>+</button>
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
              fetchMovies();
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
