import React from "react";
import "./App.css";
import Header from "../../component/Header";
import Search from "../../component/Search";
import MovieList from "../../container/movies/MovieList";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      page: 1,
      movies: []
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <MovieList />
      </div>
    );
  }
}

export default App;
