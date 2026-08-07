import QuestionButton from "./QuestionButton";
import QuestionData from "../assets/data/question";
import { useState } from "react";
function QuestionContent() {
  const [questionNo, setQuestionNo] = useState(0);
  const nextQuestion = (no, type) => {
    setQuestionNo(questionNo + 1);
    console.log(questionNo);
  };
  return (
    <>
      <section className="content">
        <h2>{QuestionData[0].title}</h2>
        <div>
          <QuestionButton
            question={QuestionData[questionNo].answera}
            nextQuestion={nextQuestion}
            type={QuestionData[0].type}
            no={1}
          ></QuestionButton>
          <QuestionButton
            question={QuestionData[questionNo].answerb}
            nextQuestion={nextQuestion}
            type={QuestionData[0].type}
            no={0}
          ></QuestionButton>
        </div>
      </section>
    </>
  );
}
export default QuestionContent;
