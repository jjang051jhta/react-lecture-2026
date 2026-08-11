import { useParams } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useState, useEffect } from "react";
import styles from "../css/MovieDetail.module.css";

function MovieDetail() {
  const { id } = useParams();
  const token = import.meta.env.VITE_TMDB_TOKEN;
  console.log("token===", token);
  //리액트는 데이터만 신경쓰면 된다. 화면 그리는건 react가 한다.
  //화면 갱신이 필요한 변수는 useState라는 Hook을 이용한다.
  //Hook은 리액트의 실행과정중에 필요한 작업을 한다.
  console.log("id===", id);
  const [detail, setDetail] = useState({});
  const detail_movie_api = `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`;

  const fetchMovies = async (url) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setDetail(data);
    console.log(data);
  };
  //화면 렌더링후 한번 실행
  useEffect(() => {
    fetchMovies(detail_movie_api);
  }, []);
  const posterUrl = `https://image.tmdb.org/t/p/w500${detail.poster_path}`;
  return (
    <>
      <Header></Header>
      <main>
        <div className={styles.detail}>
          <div className={styles.poster}>
            <img src={posterUrl}></img>
          </div>
          <div className={styles.info}>
            <div className={styles["title-box"]}>
              <h2>{detail.title}</h2>
              <p>{detail.original_title}</p>
            </div>
            <div className={styles["detail-box"]}>
              <h3 className={styles["sub-title"]}>장르</h3>
              <p>
                {detail.genres?.map((item) => {
                  return (
                    <span key={item.id} className={styles.genre}>
                      {item.name}
                    </span>
                  );
                })}
              </p>
            </div>
            <div className={styles["detail-box"]}>
              <h3 className={styles["sub-title"]}>개봉일</h3>
              <p>{detail.release_date}</p>
            </div>
            <div className={styles["detail-box"]}>
              <h3 className={styles["sub-title"]}>상영시간</h3>
              <p>{detail.runtime}</p>
            </div>
            <div className={styles["detail-box"]}>
              <h3 className={styles["sub-title"]}>관객평점</h3>
              <p>{detail.vote_average}</p>
            </div>
            <div className={styles["detail-box"]}>
              <h3 className={styles["sub-title"]}>관객투표</h3>
              <p>{detail.vote_count}</p>
            </div>
            <div className={styles["detail-box"]}>
              <h3 className={styles["sub-title"]}>줄거리</h3>
              <p>{detail.overview}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${detail.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "fixed",
          position: "fixed",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          zIndex: -1,
        }}
      ></div>
    </>
  );
}
export default MovieDetail;
