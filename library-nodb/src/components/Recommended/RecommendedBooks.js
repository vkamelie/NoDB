import React, { Component } from "react";
import "./Recommended.css"

class Recommended extends Component {
  render() {
    console.log(this.props.bookList);
    const recMapped = this.props.bookList.map(book => {
      if (book.rec === true) {
        return (
          <div key={book.id} className="map-rec">
            <h2>{book.title}</h2>
            <h3>Written by: {book.author}</h3>
          </div>
        );
      }else {return null}
    });

    return (
      <div className="rec-flex">
      <div className="body-rec">
        <header className="rec-head">Books you should read!</header>
        {recMapped}
        </div>
        
      </div>
    );
  }
}
export default Recommended;
