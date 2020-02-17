import booksTypes from "../types";
import booksService from "../services";

export function loadBookList() {
  const request = () => ({
    type: booksTypes.LOAD_BOOKS_REQUEST
  });
  const success = result => ({
    type: booksTypes.LOAD_BOOKS_SUCCESS,
    result
  });
  const failure = error => ({
    type: booksTypes.LOAD_BOOKS_FAILURE,
    error
  });

  return async dispatch => {
    dispatch(request());

    try {
      const result = await booksService.loadBookList();
      dispatch(success(result));
    } catch (error) {
      dispatch(failure(error));
    }
  };
}

export function loadBookDetail(bookId) {
  const request = () => ({
    type: booksTypes.LOAD_DETAILS_REQUEST
  });
  const success = result => ({
    type: booksTypes.LOAD_DETAILS_SUCCESS,
    result
  });
  const failure = error => ({
    type: booksTypes.LOAD_DETAILS_FAILURE,
    error
  });

  return async dispatch => {
    dispatch(request());

    try {
      const result = await booksService.loadBookDetail(bookId);
      dispatch(success(result));
    } catch (error) {
      dispatch(failure(error));
    }
  };
}
