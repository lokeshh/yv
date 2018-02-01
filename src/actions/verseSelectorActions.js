import axios from 'axios';

export const FETCH_VERSE_COUNT = 'FETCH_VERSE_COUNT';
export const VERSE_COUNT_SUCCESS = 'VERSE_COUNT_SUCCESS';
export const CHAPTER_COUNT_SUCCESS = 'CHAPTER_COUNT_SUCCESS';
export const CHANGE_BOOK = 'CHANGE_BOOK';
export const CHANGE_CHAPTER = 'CHANGE_CHAPTER';
export const CHANGE_VERSE = 'CHANGE_VERSE';
export const VERSE_TEXT_SUCCESS = 'VERSE_TEXT_SUCCESS';

const ROOT_URL = 'https://yv-reader-api.herokuapp.com';

export function changeChapter(book, chapter) {
  return dispatch => {
    dispatch({ type: FETCH_VERSE_COUNT });
    dispatch({ type: CHANGE_CHAPTER, payload: chapter })

    axios.get(`${ROOT_URL}/count/${book}/${chapter}`)
      .then(response => {
        dispatch({ type: VERSE_COUNT_SUCCESS, payload: response })
      })
    }
}

export function changeVerse(book, chapter, verse) {
  return dispatch => {
    dispatch({ type: CHANGE_VERSE, payload: verse })

    axios.get(`${ROOT_URL}/verse/${book}/${chapter}/${verse}`)
      .then(response => {
        dispatch({ type: VERSE_TEXT_SUCCESS, payload: response })
      })
    }
}

export function changeBook(book) {
  const mapping = {
    1: 32,
    2: 20,
    3: 16,
    4: 33
  }

  return dispatch => {
    dispatch({ type: CHANGE_BOOK, payload: book })
    dispatch({
      type: CHAPTER_COUNT_SUCCESS,
      payload: mapping[book]
    })
  }
}
