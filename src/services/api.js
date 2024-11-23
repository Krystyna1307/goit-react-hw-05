import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const fetchTrendingMovies = async () => {
  const response = await apiClient.get("/trending/movie/day");
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await apiClient.get(`/search/movie`, {
    params: { query },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await apiClient.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error; // У разі помилки, викидайте її для подальшої обробки.
  }
};

export const fetchMovieCast = async (movieId) => {
  const response = await apiClient.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await apiClient.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
