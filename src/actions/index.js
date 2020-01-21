import moviesTypes from "../types";
import moviesService from "../services";

export function loadMovieList() {
  const request = () => ({
    type: moviesTypes.LOAD_MOVIES_REQUEST
  });
  const success = result => ({
    type: moviesTypes.LOAD_MOVIES_SUCCESS
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
