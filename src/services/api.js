import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTI2YzRkODc3NzJlOGZkMDk4ZjE1NGJmZDgzMDYyZiIsIm5iZiI6MTczMjI4OTAwMS40MzI1MTI1LCJzdWIiOiI2NzQwNTJhM2RhZTJlNmE5MzgyNTVjZDgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NYvUmnnujAywcRI48gBdKfz-BHUsS9GbmMNlxr7Y-28";

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

export const fetchMovieDetails = async (movieId) => {
  const response = await apiClient.get(`/movie/${movieId}`);
  return response.data;
};
