// import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header/header";
import { Footer } from "./Components/Footer/footer";
import { Form } from "./Components/Form/form";
import { FlashcardData } from "./Components/Flashcards/Flashcard/flashcard.jsx"
import { flashcardArray } from "../flashcardData/flashcardData.jsx"

function App() {
  return (
    <>
      <Header />
      <Form />
      <FlashcardData flashcardArray[0] />
      <Footer />
    
    </>
  );
}

export default App;
