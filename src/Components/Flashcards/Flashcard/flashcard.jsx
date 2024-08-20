import { useState } from "react";

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
  const [ flashcardArray, setFlashcardArray ] = useState([
  { closeButton: "dgsd", emoji: "🤔", questionText: "1" },
  { closeButton: "dgsd", emoji: "🤔", questionText: "2" },
  { closeButton: "dgsd", emoji: "🤔", questionText: "3" },
])
return (
        <section> 
          { flashcardArray.map((card) => {
            return <article>{card.closeButton} {card.emoji} {card.questionText}</article>
          })}
        </section>
        )}