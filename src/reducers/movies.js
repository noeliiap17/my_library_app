import axios from "axios";
import { DataState } from "../constants";

const LOAD_MOVIES_REQUEST = "forum/LOAD_MOVIES_REQUEST";
const LOAD_MOVIES_SUCCESS = "forum/LOAD_MOVIES_SUCCESS";
const LOAD_MOVIES_FAILURE = "forum/LOAD_MOVIES_FAILURE";

const initialState = {
  movieList: [],
  movieListState: DataState.LOADED,
  errorMessage: null
};

export default function reducer(state = initialState, action) {
  const { type, error, result } = action;
  switch (type) {
    case LOAD_MOVIES_REQUEST:
      return {
        ...state,
        movieListState: DataState.LOADING,
        movieList: [],
        errorMessage: null
      };
    case LOAD_MOVIES_SUCCESS:
      return {
        ...state,
        movieListState: DataState.SUCCESS,
        movieList: result.data.production_companies
      };
    case LOAD_MOVIES_FAILURE:
      return {
        ...state,
        movieListState: DataState.FAIL,
        errorMessage: error.data
      };
    default:
      return state;
  }
}

export function loadMovieList() {
  return axios({
    method: "GET",
    url:
      "https://api.themoviedb.org/3/movie/550?api_key=2da5e8e85e936d8da0f8459be873037c"
  });
}
