import React from "react";
import { connect } from "react-redux";
import { loadBookDetail } from "../../../../actions";
import BookDetailCompoment from "../../../component/books/BookDetail";

class BookDetail extends React.Component {
  componentDidMount() {
    const {
      match: { params },
      loadBookDetail
    } = this.props;

    loadBookDetail(params.id);
  }
  render() {
    console.log(this.props.bookDetails);
    return <BookDetailCompoment bookDetails={this.props.bookDetails} />;
  }
}
const mapStateToProps = state => ({
  bookDetails: state.books.bookDetails
});

const mapDispatchToProps = dispatch => ({
  loadBookDetail: id => dispatch(loadBookDetail(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetail);
