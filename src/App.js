import React from "react";
import Book from "./Book";
import data from "./data";

const App = () => {
  const bookElements = data.map((book, index) => {
    return (
      <Book
        key={book.id}
        {...book}
        number={index}
        // author={book.author}
        // title={book.title}
        // img={book.img}
      />
    );
  });

    return (
      <>
        <h1>amazon best sellers</h1>
        <section className="booklist">{bookElements}</section>
      </>
    );
 
};

export default App;
