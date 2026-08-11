import { useParams } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function MovieDetail() {
  const { id } = useParams();

  return (
    <>
      <Header></Header>
      <main>
        <h1>Detail id = {id}</h1>
      </main>
      <Footer></Footer>
    </>
  );
}
export default MovieDetail;
