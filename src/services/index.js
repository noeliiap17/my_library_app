import axios from "axios";

export default function loadMovieList() {
  return axios({
    method: "GET",
    url:
      "https://api.themoviedb.org/3/movie/550?api_key=2da5e8e85e936d8da0f8459be873037c"
  });
}
