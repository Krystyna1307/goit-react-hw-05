import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTI2YzRkODc3NzJlOGZkMDk4ZjE1NGJmZDgzMDYyZiIsIm5iZiI6MTczMjI4OTAwMS40MzI1MTI1LCJzdWIiOiI2NzQwNTJhM2RhZTJlNmE5MzgyNTVjZDgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NYvUmnnujAywcRI48gBdKfz-BHUsS9GbmMNlxr7Y-28";

const url = "https://api.themoviedb.org/3/trending/movie/day";

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const fetchList = async () => {
  try {
    const { data } = await axios.get(url, options);
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};
