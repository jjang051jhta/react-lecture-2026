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
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const fetchMovies = async (page = 1) => {
    if (loading) return;
    setLoading(true);
    try {
      let url = "";
      // 검색어가 있으면 검색
      if (keyword.trim() !== "") {
        url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&language=ko-KR&page=${page}`;
        setIsSearch(true);
      } else {
        url = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=${page}`;
        setIsSearch(false);
      }
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      // 1페이지 → 기존 목록을 검색 결과로 교체
      if (page === 1) {
        setMovies(data.results);
      } else {
        setMovies((prevMovies) => {
          return [...prevMovies, ...data.results];
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      //여기는 무조건 한번 실행
      console.log("finally");
      setLoading(false);
    }
    console.log("loading===", loading);
  };
  useEffect(() => {
    fetchMovies(page);
  }, [page, isSearch]);

  const handleMore = () => {
    if (loading) return;
    setPage((prevPage) => prevPage + 1);
  };
  useEffect(() => {
    const handleScroll = () => {
      //console.log("scrollY===", window.scrollY);
      //console.log("windowHeight===", window.innerHeight);
      //console.log("documentHeight===", document.documentElement.scrollHeight);
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (scrollTop + windowHeight >= documentHeight - 300 && !loading) {
        console.log("바닥에 닿았다.");
        console.log("page===", page);
        console.log("loading====", loading);
        handleMore();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <>
      <Header
        fetchMovies={fetchMovies}
        keyword={keyword}
        setKeyword={setKeyword}
      ></Header>
      <main>
        <MovieList movies={movies} handleMore={handleMore}></MovieList>
      </main>
      <Footer></Footer>
    </>
  );
}

export default MovieHome;
