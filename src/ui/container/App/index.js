import React from "react";
import "./App.css";
import Header from "../../component/Header";
import BookList from "../books/BookList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BookList />
      </div>
    );
  }
}

export default App;
