import styles from "./QuestionButton.module.css";
function QuestionButton({ question, score, nextQuestion, type, className }) {
  return (
    <>
      <button
        className={styles.button}
        onClick={() => {
          nextQuestion(score, type);
        }}
      >
        {question}
        <hr></hr>
        <h2>{type}</h2>
        <h2>{score}</h2>
      </button>
    </>
  );
}
export default QuestionButton;
