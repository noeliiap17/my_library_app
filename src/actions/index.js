import moviesTypes from "../types";
import moviesService from "../services";

export function loadMovieList() {
  const request = () => ({
    type: moviesTypes.LOAD_MOVIES_REQUEST
  });
  const success = result => ({
    type: moviesTypes.LOAD_MOVIES_SUCCESS,
    result
  });
  const failure = error => ({
    type: moviesTypes.LOAD_MOVIES_FAILURE,
    error
  });

  return async dispatch => {
    dispatch(request());

    try {
      const result = await moviesService.loadMovieList();
      dispatch(success(result));
    } catch (error) {
      dispatch(failure(error));
    }
  };
}

export function loadMovieDetail(movieId) {
  const request = () => ({
    type: moviesTypes.LOAD_DETAILS_REQUEST
  });
  const success = result => ({
    type: moviesTypes.LOAD_DETAILS_SUCCESS,
    result
  });
  const failure = error => ({
    type: moviesTypes.LOAD_DETAILS_FAILURE,
    error
  });

  return async dispatch => {
    dispatch(request());

    try {
      const result = await moviesService.loadMovieDetail(movieId);
      dispatch(success(result));
    } catch (error) {
      dispatch(failure(error));
    }
  };
}
