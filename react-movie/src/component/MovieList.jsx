import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  console.log("props.movies===", movies);
  return (
    <>
      <section className="list">
        {movies.map((movie, idx) => {
          console.log(idx + 1, "===", movie);
          return <MovieCard movie={movie}></MovieCard>;
        })}
      </section>
    </>
  );
}
export default MovieList;
