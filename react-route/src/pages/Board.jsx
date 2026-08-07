import { Link, useParams, useSearchParams } from "react-router-dom";

function Board() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const query = searchParams.get("query") || "";
  const { id } = useParams();
  console.log(query);
  return (
    <>
      <h1>Board</h1>
      <h2>현재 페이지 : {page}입니다.</h2>
      <hr></hr>
      <h2>현재 페이지 : {id}입니다.</h2>
      <p>안녕하세요 Board입니다.</p>
      <nav style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <Link to="/board?page=1">1</Link>
        <Link to="/board?page=2">2</Link>
        <Link to="/board?page=3">3</Link>
        <Link to="/board?page=4">4</Link>
        <Link to="/board?page=5">5</Link>
      </nav>
      <hr></hr>
      <nav style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <Link to="/board/1">1</Link>
        <Link to="/board/2">2</Link>
        <Link to="/board/3">3</Link>
        <Link to="/board/4">4</Link>
        <Link to="/board/5">5</Link>
      </nav>
    </>
  );
}
export default Board;
