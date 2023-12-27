import React, { useState, useEffect } from "react";
import axios from "axios";

function Books() {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/books").then((res) => {
      setbooks(res.data);
    });
  });

  return (
    <>
      <div>Books</div>
      {books.map((book, index) => (
        <div key={index}>
          <h1>{book.title}</h1>
          <h2>{book.price}</h2>
          <p>{book.desc}</p>
        </div>
      ))}
    </>
  );
}

export default Books;
