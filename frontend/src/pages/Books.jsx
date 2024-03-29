import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../App.css';
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  console.log(books);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='grid-container'>
      <Header />
      <SideBar />

      <main className="main-container vh-100 d-flex justify-content-center align-items-center'">
        <div className="books w-50 bg-white rounded p-3">
          {books.length > 0 ?
            books.map((book) => (
              <div key={book.id} className="book">
                <h1>Book Shop</h1>
                <img src={book.cover} alt="" />
                <h2>{book.title}</h2>
                <p>{book.desc}</p>
                <span>${book.price}</span>
                <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
                <button className="update">
                  <Link
                    to={`/update/${book.id}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Update
                  </Link>
                </button>
              </div>
            )) :
            <div>
              <h3 style={{color: 'black'}}>Loading...</h3>
            </div>
          }
        </div>

        <button className="addHome rounded">
          <Link to="/addbook" style={{ color: "inherit", textDecoration: "none" }}>
            + Add New Book
          </Link>
        </button>
      </main>
    </div>
  );
};

export default Books;