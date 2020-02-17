import React from "react";
import { format } from "date-fns";
import Link from "../../Link";
import image from "../../../../img/portada.jpeg";
import "./styles.css";

class BookCard extends React.Component {
  render() {
    const { book } = this.props;
    const date = new Date(book.PublishDate);
    return (
      <Link to={`/detalle/${book.ID}`} className="bookCard__container">
        <span>{book.Title}</span>
        <div className="image__container">
          <img src={image} alt={book.Title} />
        </div>
        <span>{`Fecha: ${format(date, "dd/MM/yyyy")}`}</span>
      </Link>
    );
  }
}

export default BookCard;
