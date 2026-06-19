import { useState } from "react";

function AddBook() {
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [books, setBooks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      title: bookTitle,
      author: author,
      isbn: isbn,
    };

    setBooks([...books, newBook]);

    setBookTitle("");
    setAuthor("");
    setIsbn("");
  };

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="form-container">
      <h2>Add New Book</h2>

      <div className="divider">
        <span></span>
        <div className="dot"></div>
        <span></span>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Book Title:</label>
        <input
          type="text"
          placeholder="Enter book title"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          required
        />

        <label>Author:</label>
        <input
          type="text"
          placeholder="Enter author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <label>ISBN:</label>
        <input
          type="text"
          placeholder="Enter ISBN number"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          required
        />

        <button type="submit">📚 Add Book</button>
      </form>

      {books.map((book) => (
        <div key={book.id} className="book-card">
          <h3>✅ Book Added Successfully!</h3>

          <p>
            <strong>Book Title:</strong> {book.title}
          </p>

          <p>
            <strong>Author:</strong> {book.author}
          </p>

          <p>
            <strong>ISBN:</strong> {book.isbn}
          </p>

          <button
            className="delete-btn"
            onClick={() => handleDelete(book.id)}
          >
            🗑 Delete Book
          </button>
        </div>
      ))}
    </div>
  );
}

export default AddBook;