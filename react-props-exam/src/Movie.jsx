function Movie({ title, director, year, rating }) {
  return (
    <>
      <div>
        <h2>제목 : {title}</h2>
        <p>감독 : {director}</p>
        <p>개봉연도 : {year}</p>
        <p>평점 : {rating}</p>
      </div>
    </>
  );
}
export default Movie;
