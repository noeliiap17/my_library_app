import React from "react";
import Link from "../../Link";
import "./styles.css";

class MovieCard extends React.Component {
  render() {
    const base_URL_img = "https://image.tmdb.org/t/p/w500";
    const { movie } = this.props;
    return (
      <Link to={`/detalle/${movie.id}`} className="movieCard__container">
        <div className="image__container">
          <img
            src={`${base_URL_img}/${movie.poster_path}`}
            alt="nombre pelicula"
          />
        </div>
        <div className="data__container">
          <span>{movie.title}</span>
          <span>{`Rating: ${movie.vote_average}`}</span>
        </div>
      </Link>
    );
  }
}

export default MovieCard;
