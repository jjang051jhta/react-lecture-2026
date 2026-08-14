import { Link, useParams } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useState, useEffect } from "react";
import styles from "../css/MovieDetail.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import noPoster from "../assets/no-poster.png";

import man from "../assets/man.png";
import woman from "../assets/woman.png";

import "swiper/css";
import DetailLayout from "../component/DetailLayout";
//영화정보 =
function ActorDetail() {
  const { id } = useParams();
  const token = import.meta.env.VITE_TMDB_TOKEN;
  const [actorDetail, setActorDetail] = useState({});
  const [movieDetail, setMovieDetail] = useState([]);
  const fetchActorDetail = async () => {
    const headersOption = {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
    const [actorResponse, movieResponse] = await Promise.all([
      fetch(`https://api.themoviedb.org/3/person/${id}?language=ko-KR`, {
        method: "GET",
        headers: headersOption,
      }),
      fetch(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?language=ko-KR`,
        {
          method: "GET",
          headers: headersOption,
        },
      ),
    ]);
    const actorData = await actorResponse.json();
    const movieData = await movieResponse.json();
    setActorDetail(actorData);
    setMovieDetail(movieData.cast);
  };
  useEffect(() => {
    fetchActorDetail();
  }, [id]);
  let profileUrl;
  if (actorDetail.profile_path) {
    profileUrl = `https://image.tmdb.org/t/p/w500${actorDetail.profile_path}`;
  } else if (actorDetail.gender === 1) {
    profileUrl = woman;
  } else {
    profileUrl = man;
  }
  const backgroundUrl = actorDetail.profile_path
    ? `https://image.tmdb.org/t/p/original${actorDetail.profile_path}`
    : "";
  return (
    <>
      <DetailLayout backgroundImage={backgroundUrl}>
        <div className={styles.detail}>
          <div className={styles.poster}>
            <img src={profileUrl}></img>
          </div>
          <div className={styles.info}>
            <div className={styles["title-box"]}>
              <h2>{actorDetail.name}</h2>
            </div>
            {actorDetail.birthday && (
              <div className={styles["detail-box"]}>
                <h3 className={styles["sub-title"]}>생일</h3>
                <p>{actorDetail.birthday}</p>
              </div>
            )}
            {actorDetail.place_of_birth && (
              <div className={styles["detail-box"]}>
                <h3 className={styles["sub-title"]}>국적</h3>
                <p>{actorDetail.place_of_birth}</p>
              </div>
            )}
            <div className={styles["detail-box"]}>
              <h3 className={styles["sub-title"]}>인기도</h3>
              <p>{actorDetail.popularity}</p>
            </div>
            {actorDetail.homepage && (
              <div className={styles["detail-box"]}>
                <h3 className={styles["sub-title"]}>홈페이지</h3>
                <p>
                  <a href={actorDetail.homepage} target="_blank">
                    {actorDetail.homepage}
                  </a>
                </p>
              </div>
            )}

            <div className={styles["detail-box"]}>
              <h3 className={styles["sub-title"]}>주요 출연작</h3>
              <div className={styles["cast-box"]}>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={5}
                  className={styles["cast-slide"]}
                  wrapperTag="ul"
                >
                  {movieDetail.map((item, idx) => {
                    const poster = item.poster_path
                      ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
                      : noPoster;
                    return (
                      <SwiperSlide tag="li">
                        <Link to={`/movie/${item.id}`}>
                          <img src={poster} className={styles.profile}></img>
                        </Link>
                        <div className={styles.name}>{item.title}</div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </DetailLayout>
    </>
  );
}
export default ActorDetail;
