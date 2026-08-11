import Poster from "../assets/hero.png";
function MovieCard() {
  return (
    <>
      <article className="card">
        <div className="poster-box">
          <img src={Poster} alt="" className="poster" />
          <div className="rating">8.675</div>
        </div>
        <div className="info">
          <h2 className="title">제목 들어갑니다.</h2>
          <p className="original-title">영어제목</p>
          <p className="release-date">2026.08.10</p>
          <p className="overview">간략한 줄거리 들어감</p>
        </div>
      </article>
    </>
  );
}
export default MovieCard;
