import MovieCard from "./MovieCard";
import styles from "../css/MovieList.module.css";
function MovieList({ movies, handleMore }) {
  //console.log("props.movies===", movies);
  return (
    <>
      <section className={styles.list}>
        {movies.map((movie, idx) => {
          //console.log(idx + 1, "===", movie);
          return <MovieCard movie={movie}></MovieCard>;
        })}
      </section>
      <div className={styles["more-box"]}>
        <button onClick={handleMore}>more</button>
      </div>
    </>
  );
}
export default MovieList;
