import { useSearchParams } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

function Result() {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  return (
    <>
      <Header></Header>
      <h1>{`당신의 mbti는 ${mbti}`}</h1>
      <Footer></Footer>
    </>
  );
}
export default Result;
