import { useSearchParams } from "react-router-dom";
import ResultData from "../assets/data/result";

function QuestionResult() {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const fixedData = ResultData.find((item, idx) => item.best === mbti);
  return (
    <>
      <section className="result">
        <h2 className="title">당신을 집사로 선택한 고양이는?</h2>
        <div className="cat">
          <img src={fixedData.image} className="img"></img>
          <div className="desc">
            <p>당신의 mbti = {mbti}</p>
            <div>
              당신과 궁합이 잘맞는 고양이는 <br />
              <p>
                <strong>{fixedData.name}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default QuestionResult;
