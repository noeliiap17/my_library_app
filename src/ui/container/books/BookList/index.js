import React from "react";
import { connect } from "react-redux";
import BookCard from "../../../component/books/BookCard";
import { loadBookList } from "../../../../actions";
import "./styles.css";

class MovieList extends React.Component {
  componentDidMount() {
    this.props.loadBookList();
  }

  render() {
    const { bookList = [] } = this.props;
    return (
      <div className="container">
        {bookList.map((book, key) => (
          <BookCard book={book} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bookList: state.books.bookList
});

const mapDispatchToProps = dispatch => ({
  loadBookList: () => dispatch(loadBookList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
