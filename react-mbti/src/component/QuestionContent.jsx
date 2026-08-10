import QuestionButton from "./QuestionButton";
import QuestionData from "../assets/data/question";
import { useState } from "react";
import styles from "./QuestionContent.module.css";
import { useNavigate } from "react-router-dom";
function QuestionContent() {
  const navigate = useNavigate();
  const [questionNo, setQuestionNo] = useState(0);
  const questionTotal = QuestionData.length;
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  //quiz
  //map,filter,reduce
  const nextQuestion = (score, type) => {
    //
    const newScore = totalScore.map(function (item, idx) {
      //console.log(item);
      if (item.id === type) {
        return { ...item, score: item.score + score };
      } else {
        return item;
      }
    });
    setTotalScore(newScore);
    console.log(newScore);
    if (questionNo >= questionTotal - 1) {
      //alert("더이상 문제는 없습니다.");
      const mbti = newScore.reduce((acc, curr) => {
        return acc + (curr.score >= 2 ? curr.id.charAt(0) : curr.id.charAt(1));
      }, "");
      console.log(mbti);
      navigate(`/result?mbti=${mbti}`);
    } else {
      //마지막까지 가지 않았을때 연산
      setQuestionNo((prev) => prev + 1);
    }
    //setQuestionNo(questionNo + 1);
  };

  return (
    <>
      <section className={styles.content}>
        <h2 className={styles.title}>{QuestionData[questionNo].title}</h2>
        <div className={styles.progress}>
          {`${questionNo + 1} / ${questionTotal}`}
        </div>
        <div className={styles["button-box"]}>
          <QuestionButton
            question={QuestionData[questionNo].answera}
            nextQuestion={nextQuestion}
            type={QuestionData[questionNo].type}
            score={1}
          ></QuestionButton>
          <QuestionButton
            question={QuestionData[questionNo].answerb}
            nextQuestion={nextQuestion}
            type={QuestionData[questionNo].type}
            score={0}
          ></QuestionButton>
        </div>
      </section>
    </>
  );
}
export default QuestionContent;
