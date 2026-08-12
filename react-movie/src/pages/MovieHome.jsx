import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import MovieList from "../component/MovieList";

const POPULAR_API =
  "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";
function MovieHome() {
  const token = import.meta.env.VITE_TMDB_TOKEN;
  console.log("token===", token);
  //리액트는 데이터만 신경쓰면 된다. 화면 그리는건 react가 한다.
  //화면 갱신이 필요한 변수는 useState라는 Hook을 이용한다.
  //Hook은 리액트의 실행과정중에 필요한 작업을 한다.
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (url) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setMovies(data.results);
    console.log(data.results);
  };
  //화면 렌더링후 한번 실행

  useEffect(() => {
    fetchMovies(POPULAR_API);
  }, []);
  return (
    <>
      <Header></Header>
      <main>
        <MovieList movies={movies}></MovieList>
      </main>
      <Footer></Footer>
    </>
  );
}

export default MovieHome;
