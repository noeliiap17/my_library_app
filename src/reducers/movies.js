import { DataState } from "../constants";
import moviesTypes from "../types";

const initialState = {
  movieList: [],
  movieDetails: {},
  movieListState: DataState.LOADED,
  movieDetailsState: DataState.LOADED,
  errorMessage: null
};

export default function reducer(state = initialState, action) {
  const { type, error, result } = action;
  switch (type) {
    case moviesTypes.LOAD_MOVIES_REQUEST:
      return {
        ...state,
        movieListState: DataState.LOADING,
        movieList: [],
        errorMessage: null
      };
    case moviesTypes.LOAD_MOVIES_SUCCESS:
      return {
        ...state,
        movieListState: DataState.SUCCESS,
        movieList: result.data.results
      };
    case moviesTypes.LOAD_MOVIES_FAILURE:
      return {
        ...state,
        movieListState: DataState.FAIL,
        errorMessage: error.data
      };
    case moviesTypes.LOAD_DETAILS_REQUEST:
      return {
        ...state,
        movieDetailsState: DataState.LOADING,
        movieDetails: [],
        errorMessage: null
      };
    case moviesTypes.LOAD_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetailsState: DataState.SUCCESS,
        movieDetails: result.data
      };
    case moviesTypes.LOAD_DETAILS_FAILURE:
      return {
        ...state,
        movieDetailsState: DataState.FAIL,
        errorMessage: error.data
      };
    default:
      return state;
  }
}
