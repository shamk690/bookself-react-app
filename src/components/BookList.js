import React from "react";

const BookList = ({ books }) => {
  return (
    <div>
      {books.map((book, index) => (
        <div>
          <p>{book.volumeInfo.title}</p>
          <img src={book.volumeInfo.imageLinks.thumbnail} />
          <p>{book.volumeInfo.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
