import React, { Component } from "react";
import "./Library.css";
import axios from "axios";

export default class Library extends Component {
  change = id => {
    axios.put(`/api/library/${id}`).then(res => {
      console.log(res.data);
      this.props.getAllBooks();
    });
  };

  bookD = id => {
    axios.delete(`/api/library/${id}`).then(res => {
      console.log(res.data);
      this.props.getAllBooks();
    });
  };

  render() {
    let mappedBooks = this.props.bookList.map(book => {
      return (
        <div key={book.id} className="map-body">
          <h2>{book.title}</h2>
          <img className="image" src={book.url} alt="" />
          <p>
            {book.summary} Written by {book.author}
          </p>
          <h4>{book.genre}</h4>
          <button onClick={() => this.change(book.id)}>Like!</button>
          <button onClick={() => this.bookD(book.id)}>Delete</button>
        </div>
      );
    });

    return (
      <div className="library-body">
        {/* <header>Library</header> */}

        {mappedBooks}
      </div>
    );
  }
}
