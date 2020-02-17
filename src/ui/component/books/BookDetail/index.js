import React from "react";

import "./styles.css";

class BookDetail extends React.Component {
  render() {
    const { bookDetails = {} } = this.props;
    console.log(bookDetails);
    return <span>{bookDetails.Title}</span>;
  }
}

export default BookDetail;
