import { env } from './env.js';

export const API_URL =
  'https://moviesdatabase.p.rapidapi.com/titles/random?list=top_rated_english_250';
export const API_MOVIE_ID_URL =
  'https://moviesdatabase.p.rapidapi.com/titles/{id}?info=base_info';
export const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': env.X_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
  },
};
