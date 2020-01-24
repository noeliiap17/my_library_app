import React from "react";

import "./styles.css";

class MovieDetail extends React.Component {
  render() {
    const { movie = {} } = this.props;
    const base_URL_img = "https://image.tmdb.org/t/p/w500";
    console.log(movie);
    return (
      <div className="detail__container">
        <div
          className="backdrop__container"
          style={{
            backgroundImage: `url(${base_URL_img}/${movie.backdrop_path})`
          }}
        >
          <span>{movie.title}</span>
        </div>
        <div>
          <div className="info__container">
            <span className="movie__popularity">{`${movie.popularity} Reproducciones`}</span>
          </div>
          <div className="info__container">
            <span className="movie__data">{`Fecha: ${movie.release_date}`}</span>
            <span className="movie__data">{`Duración: ${movie.runtime} min`}</span>
          </div>
          <span className="info__container movie__data">{movie.overview}</span>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
