const API_KEY = "live_a8DViAR1Xqq26ArqqNz0CAF7sHdqahYGHoDQoa3eoa4T1qCsSxymmNqqJh2aOsgi";
const BASE_URL = "https://api.thecatapi.com/v1/";



const refs = {
  breedSelect : document.querySelector('.breed-select'),
  loader : document.querySelector(".loader"),
  error : document.querySelector(".error"),
  catInfo : document.querySelector(".cat-info")
}

function fetchBreeds() {
  const option = new URLSearchParams({

  })
  return fetch(`${BASE_URL}breeds?api key=${API_KEY}`)
}