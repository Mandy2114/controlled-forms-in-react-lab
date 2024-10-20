import { useState } from "react";

const Bookself = () => {
  const [book, setbooks] = useState([]);

  const [newBook, setNewBook] = useState(
    {
      title: "Shadow Spinner",
      author: "Susan Fletcher",
    },
    {
      title: "The Otherworldlies",
      author: "Jennifer Anne Kogler",
    }
  );

  const handleInputChange = (event) => {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setbook([...Bookself, newBook]);
    setNewBook({
      title: "",
      author: "",
    });
  };

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a book</h3>

          < form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />
            <label htmlFor="title">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            />
            <button type="submit">Add a book</button>
          </form>
       </div>
         <div className="bookCardDiv">
            {book.map((book, index) => (
              <div key={index} className="bookCard">
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
              </div>
            ))}
          </div>
      </div> 
    </>
  );
}
  
