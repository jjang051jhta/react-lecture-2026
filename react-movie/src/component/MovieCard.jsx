//import Poster from "../assets/hero.png";
import { Link } from "react-router-dom";
import styles from "../css/MovieCard.module.css";
function MovieCard({ movie }) {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <>
      <Link className={styles.card} to={`/movie/${movie.id}`}>
        <div className={styles["poster-box"]}>
          <img src={posterUrl} alt="" className={styles.poster} />
          <div className={styles.rating}>{movie.vote_average.toFixed(1)}</div>
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{movie.title}</h2>
          <p className={styles["original-title"]}>{movie.original_title}</p>
          <p className={styles["release-date"]}>{movie.release_date}</p>
          <p className={styles.overview}>{movie.overview}</p>
        </div>
      </Link>
    </>
  );
}
export default MovieCard;
