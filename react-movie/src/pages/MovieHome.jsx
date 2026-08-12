import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import MovieList from "../component/MovieList";

function MovieHome() {
  const token = import.meta.env.VITE_TMDB_TOKEN;
  console.log("token===", token);
  //리액트는 데이터만 신경쓰면 된다. 화면 그리는건 react가 한다.
  //화면 갱신이 필요한 변수는 useState라는 Hook을 이용한다.
  //Hook은 리액트의 실행과정중에 필요한 작업을 한다.
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const fetchMovies = async (page) => {
    console.log("fetchMovies page===", page);
    const url = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=${page}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setMovies((prevMovies) => {
      console.log("prevMovies.length===", prevMovies.length);
      return [...prevMovies, ...data.results];
    });
    //setMovies((prevMovies) => [...prevMovies, ...data.results]);
    console.log(data.results);
  };
  //화면 렌더링후 한번 실행

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const handleMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Header></Header>
      <main>
        <MovieList movies={movies} handleMore={handleMore}></MovieList>
      </main>
      <Footer></Footer>
    </>
  );
}

export default MovieHome;
