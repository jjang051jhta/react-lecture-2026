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
      </button>
    </>
  );
}
export default QuestionButton;
