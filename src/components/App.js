import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

function App() {
  return (
    <div>
      <Header />
      {notes.map((createList) => (
        <Note
          key={createList.key}
          title={createList.title}
          content={createList.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
