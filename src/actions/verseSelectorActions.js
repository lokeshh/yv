import axios from 'axios';

export const FETCH_VERSE_COUNT = 'FETCH_VERSE_COUNT';
export const VERSE_COUNT_SUCCESS = 'VERSE_COUNT_SUCCESS';
export const CHAPTER_COUNT_SUCCESS = 'CHAPTER_COUNT_SUCCESS';
export const CHANGE_BOOK = 'CHANGE_BOOK';
export const CHANGE_CHAPTER = 'CHANGE_CHAPTER';
export const CHANGE_VERSE = 'CHANGE_VERSE';
export const VERSE_TEXT_SUCCESS = 'VERSE_TEXT_SUCCESS';
export const COMM_TEXT_SUCCESS = 'COMM_TEXT_SUCCESS';
export const COMM_ABS_TEXT_SUCCESS = 'COMM_ABS_TEXT_SUCCESS';
export const RESET_TEXT = 'RESET_TEXT';

// const ROOT_URL = 'https://yv-reader-api.herokuapp.com';
const ROOT_URL = 'https://o6el0hi09a.execute-api.us-east-1.amazonaws.com/dev'

export function changeChapter(book, chapter) {
  return dispatch => {
    dispatch({ type: FETCH_VERSE_COUNT });
    dispatch({ type: CHANGE_CHAPTER, payload: chapter })
    dispatch({ type: CHANGE_VERSE, payload: 0 })
    dispatch({ type: RESET_TEXT })

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
      }
    )

    axios.get(`${ROOT_URL}/commentary/${book}/${chapter}/${verse}`)
      .then(response => {
        dispatch({ type: COMM_TEXT_SUCCESS, payload: response })
      }
    )

    axios.get(`${ROOT_URL}/commentary_abs/${book}/${chapter}/${verse}`)
      .then(response => {
        dispatch({ type: COMM_ABS_TEXT_SUCCESS, payload: response })
      }
    )
  }
}

export function changeBook(book) {
  const mapping = {
    1: 33,
    2: 20,
    3: 122,
    4: 62,
    5: 93,
    6: 128,
    7: 216
  }

  return dispatch => {
    dispatch({ type: CHANGE_BOOK, payload: book })
    dispatch({ type: CHANGE_CHAPTER, payload: 0 })
    dispatch({ type: CHANGE_VERSE, payload: 0 })
    dispatch({ type: RESET_TEXT })
    dispatch({
      type: CHAPTER_COUNT_SUCCESS,
      payload: mapping[book]
    })
  }
}
