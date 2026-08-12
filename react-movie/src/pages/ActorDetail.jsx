import { Link, useParams } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useState, useEffect } from "react";
import styles from "../css/MovieDetail.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import noProfile from "../assets/user-profile.png";
// Import Swiper styles
import "swiper/css";
//영화정보 =
function ActorDetail() {
  const { id } = useParams();
  const token = import.meta.env.VITE_TMDB_TOKEN;
  const [actorDetail, setActorDetail] = useState({});
  const [movieDetail, setMovieDetail] = useState([]);
  console.log(token);
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
    //console.log(actorData);
    console.log(movieData);
  };
  useEffect(() => {
    fetchActorDetail();
  }, [id]);
  const profileUrl = `https://image.tmdb.org/t/p/w500${actorDetail.profile_path}`;
  return (
    <>
      <Header></Header>
      <main>
        <div className={styles.detail}>
          <div className={styles.poster}>
            <img src={profileUrl}></img>
          </div>
          <div className={styles.info}>
            <div className={styles["title-box"]}>
              <h2>{actorDetail.name}</h2>
            </div>
            <div className={styles["detail-box"]}>
              <h3 className={styles["sub-title"]}>생일</h3>
              <p>{actorDetail.birthday}</p>
            </div>
            <div className={styles["detail-box"]}>
              <h3 className={styles["sub-title"]}>국적</h3>
              <p>{actorDetail.place_of_birth}</p>
            </div>
            <div className={styles["detail-box"]}>
              <h3 className={styles["sub-title"]}>인기도</h3>
              <p>{actorDetail.popularity}</p>
            </div>
            <div className={styles["detail-box"]}>
              <h3 className={styles["sub-title"]}>홈페이지</h3>
              <p>
                <a href={actorDetail.homepage} target="_blank">
                  {actorDetail.homepage}
                </a>
              </p>
            </div>

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
                      : noProfile;
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
      </main>
      <Footer></Footer>
      <div className={styles.bg}></div>
    </>
  );
}
export default ActorDetail;
