import "./App.css";
import { Header } from "./Components/Header/header";
import { Footer } from "./Components/Footer/footer";
import { Form } from "./Components/Form/form";
import { FlashcardData } from "./Components/Flashcards/Flashcard/flashcard.jsx"
import { useState } from "react";

function App() {

  return (
    <>
      <Header />
     
      <Form />
      <FlashcardData />
      

      <Footer />


    </>
  );
}

export default App;
