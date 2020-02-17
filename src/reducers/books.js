import { DataState } from "../constants";
import booksTypes from "../types";

const initialState = {
  bookList: [],
  bookDetails: {},
  bookListState: DataState.LOADED,
  bookDetailsState: DataState.LOADED,
  errorMessage: null
};

export default function reducer(state = initialState, action) {
  const { type, error, result } = action;
  switch (type) {
    case booksTypes.LOAD_BOOKS_REQUEST:
      return {
        ...state,
        bookListState: DataState.LOADING,
        bookList: [],
        errorMessage: null
      };
    case booksTypes.LOAD_BOOKS_SUCCESS:
      return {
        ...state,
        bookListState: DataState.SUCCESS,
        bookList: result.data
      };
    case booksTypes.LOAD_BOOKS_FAILURE:
      return {
        ...state,
        bookListState: DataState.FAIL,
        errorMessage: error.data
      };
    case booksTypes.LOAD_DETAILS_REQUEST:
      return {
        ...state,
        bookDetailsState: DataState.LOADING,
        bookDetails: {},
        errorMessage: null
      };
    case booksTypes.LOAD_DETAILS_SUCCESS:
      return {
        ...state,
        bookDetailsState: DataState.SUCCESS,
        bookDetails: result.data
      };
    case booksTypes.LOAD_DETAILS_FAILURE:
      return {
        ...state,
        bookDetailsState: DataState.FAIL,
        errorMessage: error.data
      };
    default:
      return state;
  }
}
