import axios from "axios";

export const base_URL = "https://api.themoviedb.org/3";
export const api_key = "api_key=2da5e8e85e936d8da0f8459be873037c";
const lang = "&language=es-ES";

function loadMovieList() {
  return axios({
    method: "GET",
    url: `${base_URL}/discover/movie?${api_key}&${lang}`
  });
}
function loadMovieDetail(movieId) {
  return axios({
    method: "GET",
    url: `${base_URL}/movie/${movieId}?${api_key}&${lang}`
  });
}

export default {
  loadMovieList,
  loadMovieDetail
};
