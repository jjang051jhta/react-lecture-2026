//import Poster from "../assets/hero.png";
import styles from "../css/MovieCard.module.css";
function MovieCard({ movie }) {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <>
      <article className={styles.card}>
        <div className={styles["poster-box"]}>
          <img src={posterUrl} alt="" className={styles.poster} />
          <div className={styles.rating}>8.675</div>
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{movie.title}</h2>
          <p className={styles["original-title"]}>{movie.original_title}</p>
          <p className={styles["release-date"]}>{movie.release_date}</p>
          <p className={styles.overview}>{movie.overview}</p>
        </div>
      </article>
    </>
  );
}
export default MovieCard;
