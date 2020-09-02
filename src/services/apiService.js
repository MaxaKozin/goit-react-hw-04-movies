const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = "4858d21346699d14f09ede89415e4aeb";

const fetchRated = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
  )
    .then((res) => res.json())
    .then(({ results }) => results);
};

const fetchByQuery = (query) => {
  if (query) {
    return fetch(`${baseUrl}search/movie${query}&api_key=${apiKey}`)
      .then((res) => res.json())
      .then(({ results }) => results);
  }
};

const fetchById = (movieId, type) => {
  switch (type) {
    case "credits":
      return fetch(
        `${baseUrl}movie/${movieId}/credits?api_key=${apiKey}`
      ).then((res) => res.json());
    case "reviews":
      return fetch(
        `${baseUrl}movie/${movieId}/reviews?api_key=${apiKey}`
      ).then((res) => res.json());
    default:
      return fetch(`${baseUrl}movie/${movieId}?api_key=${apiKey}`).then((res) =>
        res.json()
      );
  }
};

const getImgUrl = (url) => {
  return `https://image.tmdb.org/t/p/original${url}`;
};

export { fetchRated, fetchByQuery, fetchById, getImgUrl };
