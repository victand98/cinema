import { jest } from '@jest/globals';
import { API_MOVIE_ID_URL, OPTIONS, get_movie } from '../javascript';
import { getMovieResponseMock } from './__mocks__';

describe('get_movie', () => {
  it('should fetch and return the movie data', async () => {
    const movieId = 'tt8503618';
    const movieResponseMock = getMovieResponseMock(movieId);

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(movieResponseMock),
    });

    const result = await get_movie(movieId);

    expect(fetch).toHaveBeenCalledWith(
      API_MOVIE_ID_URL.replace('{id}', movieId),
      OPTIONS
    );
    expect(result).toEqual(movieResponseMock);
  });

  it('should handle errors and log them to the console', async () => {
    const movieId = 'tt8503618';
    const expectedError = new Error('Network error');

    global.fetch = jest.fn().mockRejectedValue(expectedError);
    global.console.error = jest.fn();

    await get_movie(movieId);

    expect(fetch).toHaveBeenCalledWith(
      API_MOVIE_ID_URL.replace('{id}', movieId),
      OPTIONS
    );
    expect(console.error).toHaveBeenCalledWith(expectedError);
  });
});
