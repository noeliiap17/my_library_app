import React from "react";
import { connect } from "react-redux";
import MovieCard from "../../../component/movies/MovieCard";
import { loadMovieList } from "../../../../actions";
import "./styles.css";

class MovieList extends React.Component {
  componentDidMount() {
    this.props.loadMovieList();
  }

  render() {
    const { movieList = [] } = this.props;
    return (
      <div className="container">
        {movieList.map((movie, key) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieList: state.movies.movieList
});

const mapDispatchToProps = dispatch => ({
  loadMovieList: () => dispatch(loadMovieList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
