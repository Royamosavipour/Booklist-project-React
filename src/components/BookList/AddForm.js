import React, { Component } from "react";
import Book from "./Book";

export default class AddForm extends Component {
  constructor() {
    super();

    this.state = {
      books: [],

      title: "",
      author: "",
      year: "",
    };

    this.titelHandeler = this.titelHandeler.bind(this);
    this.authorHandeler = this.authorHandeler.bind(this);
    this.yearHandeler = this.yearHandeler.bind(this);
    this.sumbitHandeler = this.sumbitHandeler.bind(this);
  }
  //   ************************************* functions for input

  sumbitHandeler(e) {
    e.preventDefault();
    let { title, author, year } = this.state;
    if (title && author && year) {
        let newBook={
            id:this.state.books.length+1,
            title,
            author,
            year,
        }
        this.setState({
            books:[...this.state.books,newBook]
        })
        this.setState({
            title:'',
            author:'',
            year:''
        })
    }
  }

  titelHandeler(e) {
    this.setState({
      title: e.target.value,
    });
  }
  authorHandeler(e) {
    this.setState({
      author: e.target.value,
    });
  }
  yearHandeler(e) {
    this.setState({
      year: e.target.value,
    });
  }
  // *******************************************jsx Render
  render() {
    return (
      <>
        <form id="book-form" autocomplete="off" onSubmit={this.sumbitHandeler}>
          <div className="form-group">
            <label for="title">Title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              onChange={this.titelHandeler}
              value={this.state.title}
            />
          </div>

          <div className="form-group">
            <label for="author">Author</label>
            <input
              type="text"
              id="author"
              className="form-control"
              onChange={this.authorHandeler}
              value={this.state.author}
            />
          </div>

          <div className="form-group">
            <label for="year">Year</label>
            <input
              type="text"
              id="year"
              className="form-control"
              onChange={this.yearHandeler}
              value={this.state.year}
            />
          </div>
          <input
            type="submit"
            value="Add Book"
            className="btn btn-warning btn-block add-btn"
          />
        </form>
        <table class="table table-striped mt-5 text-center">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody id="book-list">
            {this.state.books.map((book) => (
              <Book {...book} key={book.id} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
