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

  const handlInputChange = (event) => {
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

<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a book</h3>
    {/*form will go here */}
  </div>
</div>
  )
}
  
