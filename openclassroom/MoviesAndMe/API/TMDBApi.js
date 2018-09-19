const API_TOKEN = "b520ccdc2ea0de41e4f6a93e4e6cc089"

export function getFilmsFromApiWithSearchedText (text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getImageFromApi (name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}

// Récupération du détail d'un film
export function getFilmDetailFromApi (id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}


// Get price of movie
// https://api.themoviedb.org/3/movie/181808?api_key=b520ccdc2ea0de41e4f6a93e4e6cc089
export function getFilmPriceFromApi (id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}


// Récupére la liste des films les plus populaires
export function getTopRatedFilmsFromApiWithSearchedText () {
  // https://api.themoviedb.org/3/movie/top_rated?api_key=b520ccdc2ea0de41e4f6a93e4e6cc089&language=en-US&page=1
  const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + API_TOKEN + '&language=en-US&page=1'
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}