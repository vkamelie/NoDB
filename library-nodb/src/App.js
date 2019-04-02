import React, { Component } from "react";
import Library from "./components/Library/Library";
import "./App.css";
import axios from "axios";
import Addbook from "./components/AddBook/Addbook";
import RecommendedBooks from "./components/Recommended/RecommendedBooks";
import Header from "./components/Header/Header"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
      
    };
  }

  componentDidMount() {
    this.getAllBooks();
    // this.getRec();
    console.log(this.state.bookList);
  }

  getAllBooks = () => {
    axios.get("/api/library").then(response => {
      console.log(response.data);
      this.setState({
        bookList: response.data
      });
    });
  };

  

  // bookD = id => {
  //   axios.delete(`/api/libary/${id}`).then(res => {console.log(res.data);
  //   this.setState({
  //     deletedList : res.data
  //   })}
  // )}

  // getRec = () => {
  //   console.log(this.state.bookList);
  //   // const recList = this.state.bookList.filter(e => bookList.rec === true);
  //   // console.log(recList);
  // };

  updateBookList = (newTitle, newAuthor, newSummary, newGenre, newPhoto) => {
    console.log(newPhoto)
    let obj = {
      title: newTitle,
      author: newAuthor,
      summary: newSummary,
      genre: newGenre,
      url: newPhoto
    };

    axios.post("/api/library", obj).then(res => {
      console.log(res);
      this.setState({ bookList: res.data });
    });
    this.getAllBooks();
  };

  // changeRecs =  => {

  // }

  render() {
    return (
      <div className="App">
      <Header />
        <Library className="L-body" bookList={this.state.bookList}  getAllBooks={this.getAllBooks}/>
        <div className="rec-add-book">
        <Addbook className="addBook-body" updatebook={this.updateBookList} />
        <RecommendedBooks bookList={this.state.bookList} getAllBooks={this.getAllBooks} />
       

        </div>
      </div>
    );
  }
  
}

export default App;
