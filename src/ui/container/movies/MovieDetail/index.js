import React from "react";
import { connect } from "react-redux";
import { loadMovieDetail } from "../../../../actions";
import MovieDetailCompoment from "../../../component/movies/MovieDetail";

class MovieDetail extends React.Component {
  componentDidMount() {
    const {
      match: { params },
      loadMovieDetail
    } = this.props;

    loadMovieDetail(params.id);
  }
  render() {
    console.log(this.props.movieDetails);
    return <MovieDetailCompoment movie={this.props.movieDetails} />;
  }
}
const mapStateToProps = state => ({
  movieDetails: state.movies.movieDetails
});

const mapDispatchToProps = dispatch => ({
  loadMovieDetail: id => dispatch(loadMovieDetail(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);
