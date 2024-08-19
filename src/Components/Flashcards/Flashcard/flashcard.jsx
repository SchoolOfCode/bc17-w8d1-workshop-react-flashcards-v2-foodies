export function Flashcard(props) {
  return (
    <>
      <p>{props.closeButton}</p>
      <p>{props.emoji}</p>
      <h3>{props.questionText}</h3>
    </>
  );
}

export function FlashcardData() {
  return (
    <>
      <Flashcard closeButton="dgsd" emoji="🤔" questionText="What is React?" />
      <Flashcard closeButton="dgsd" emoji="🤔" questionText="What is React?" />
      <Flashcard closeButton="dgsd" emoji="🤔" questionText="What is React?" />
    </>
  );
}
