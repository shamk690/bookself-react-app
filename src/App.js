import React, { Component } from "react";
import Header from "./components/Header";
import BookList from "./components/BookList";
import axios from "axios";

class App extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    const url =
      "https://www.googleapis.com/books/v1/users/112383420605157534442/bookshelves/2/volumes";

    console.log("mounted");
    axios.get(url).then(({ data: { items } }) => {
      this.setState({ books: items });
      console.log(items);
    });
  }
  render() {
    return (
      <div>
        <Header />
        {this.state.books.length > 0 && <BookList books={this.state.books} />}
      </div>
    );
  }
}

export default App;
