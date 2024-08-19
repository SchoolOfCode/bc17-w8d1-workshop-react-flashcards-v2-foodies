// import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header/header";
// import { Footer } from "./Components/Footer/footer";
import { Form } from "./Components/Form/form";
import { FlashcardData } from "./Components/Flashcards/Flashcard/flashcard.jsx";

function App() {
  return (
    <>
      <Header />
      <Form />
      <FlashcardData />
    </>
  );
}

export default App;
