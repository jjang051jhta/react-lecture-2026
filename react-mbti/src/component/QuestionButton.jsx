function QuestionButton({ question, no, nextQuestion, type }) {
  return (
    <>
      <button
        className="button"
        onClick={() => {
          nextQuestion(no, type);
        }}
      >
        {question}
      </button>
    </>
  );
}
export default QuestionButton;
