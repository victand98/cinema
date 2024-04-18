import { jest } from '@jest/globals';
import { get_movies } from '../javascript';
import { moviesResponseMock } from './__mocks__';

describe('get_movies', () => {
  it('should return an array of movies', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      text: jest.fn().mockResolvedValue(JSON.stringify(moviesResponseMock)),
    });

    const movies = await get_movies();

    expect(movies).toEqual(moviesResponseMock.results);
  });

  it('should handle errors and log them to the console', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));
    console.error = jest.fn();

    await get_movies();

    expect(console.error).toHaveBeenCalledWith(new Error('Network error'));
  });
});
