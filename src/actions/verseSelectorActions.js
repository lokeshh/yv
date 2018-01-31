import axios from 'axios';

export const FETCH_COUNT = 'FETCH_COUNT';
export const FETCH_COUNT_SUCCESS = 'FETCH_COUNT_SUCCESS';

const ROOT_URL = 'https://yv-reader-api.herokuapp.com';

export function fetchVerseCount(book, chapter) {
  const request = axios.get(`${ROOT_URL}/count/#{book}/#{chapter}`)

  return {
    type: FETCH_COUNT_SUCCESS,
    payload: request
  }
}
