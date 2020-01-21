import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Link from "../../component/Link";
import { loadMovieList } from "../../../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.loadMovieList();
  }

  render() {
    const { movieList } = this.props;
    console.log(movieList);
    return (
      <div className="App">
        <p>My react app</p>
        <Link to="/about" className="App-link">
          <p>About</p>
        </Link>

        {movieList.map((movie, key) => (
          <p>{movie.name}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieList: state.movies.movieList
});

export const mapDispatchToProps = dispatch => ({
  loadMovieList: () => dispatch(loadMovieList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
