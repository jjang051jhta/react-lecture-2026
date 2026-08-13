import { Link, useParams } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useState, useEffect } from "react";
import styles from "../css/MovieDetail.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import man from "../assets/man.png";
import woman from "../assets/woman.png";
// Import Swiper styles
import "swiper/css";
//영화정보 =
function MovieDetail() {
  const { id } = useParams();
  const token = import.meta.env.VITE_TMDB_TOKEN;
  //리액트는 데이터만 신경쓰면 된다. 화면 그리는건 react가 한다.
  //화면 갱신이 필요한 변수는 useState라는 Hook을 이용한다.
  //Hook은 리액트의 실행과정중에 필요한 작업을 한다.
  const [detail, setDetail] = useState({});
  const [casts, setCasts] = useState([]); //배우정보

  const fetchMovieDetail = async () => {
    const headersOption = {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
    const [movieResponse, creditResponse] = await Promise.all([
      fetch(`https://api.themoviedb.org/3/movie/${id}?language=ko-KR`, {
        method: "GET",
        headers: headersOption,
      }),
      fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=ko-KR`, {
        method: "GET",
        headers: headersOption,
      }),
    ]);

    const movieData = await movieResponse.json();
    //console.log(movieData);
    setDetail(movieData);
    const creditData = await creditResponse.json();
    //console.log(creditData.cast);
    setCasts(creditData.cast);
  };

  //화면 렌더링후 한번 실행
  useEffect(() => {
    //window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchMovieDetail();
  }, [id]);

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
            {detail.overview && (
              <div className={styles["detail-box"]}>
                <h3 className={styles["sub-title"]}>줄거리</h3>
                <p>{detail.overview}</p>
              </div>
            )}
            <div className={styles["detail-box"]}>
              <h3 className={styles["sub-title"]}>출연배우</h3>
              <div className={styles["cast-box"]}>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={5}
                  className={styles["cast-slide"]}
                  wrapperTag="ul"
                >
                  {casts.map((item, idx) => {
                    const profile = item.profile_path
                      ? `https://image.tmdb.org/t/p/w300${item.profile_path}`
                      : item.gender === 1
                        ? woman
                        : man;
                    return (
                      <SwiperSlide tag="li">
                        <Link to={`/actor/${item.id}`}>
                          <img
                            src={profile}
                            alt=""
                            className={styles.profile}
                          />
                        </Link>
                        <div className={styles.name}>{item.name}</div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
      <div
        className={styles.bg}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${detail.backdrop_path})`,
        }}
      ></div>
    </>
  );
}
export default MovieDetail;
