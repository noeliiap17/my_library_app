import axios from "axios";

function loadBookList() {
  return axios({
    method: "GET",
    url: "https://fakerestapi.azurewebsites.net/api/Books"
  });
}
function loadBookDetail(bookId) {
  return axios({
    method: "GET",
    url: `https://fakerestapi.azurewebsites.net/api/Books/${bookId}`
  });
}

export default {
  loadBookList,
  loadBookDetail
};

//https://fakerestapi.azurewebsites.net/api/Books
//https://fakerestapi.azurewebsites.net/api/Books/:id

//https://fakerestapi.azurewebsites.net/api/Authors
//https://fakerestapi.azurewebsites.net/api/Authors/:id
