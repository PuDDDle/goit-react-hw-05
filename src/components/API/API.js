import axios from "axios";

const API_KEY = "c436dd983701aad418ed2f19cbf870ef";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const fetchMovies = async () => {
  const res = await axios.get("/trending/movie/day", {
    params: {
      api_key: API_KEY,
    },
  });
  return res.data.results;
};

const getMovieById = async (id) => {
  const res = await axios.get(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return res.data;
};

const getCast = async (id) => {
  const res = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return res.data.cast;
};

const getReviews = async (id) => {
  const res = await axios.get(`/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return res.data.results;
};

const getMovieByName = async (query) => {
  const res = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return res.data.results;
};

export { fetchMovies, getMovieById, getCast, getReviews, getMovieByName };
