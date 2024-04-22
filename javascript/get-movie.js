import { API_MOVIE_ID_URL, OPTIONS } from './constants.js';

export const get_movie = async (movieId) => {
  try {
    const movieUrl = API_MOVIE_ID_URL.replace('{id}', movieId);

    const response = await fetch(movieUrl, OPTIONS);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
