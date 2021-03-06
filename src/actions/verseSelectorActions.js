import * as firebase from "firebase/app";
import 'firebase/database';
import 'firebase/analytics';

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


var firebaseConfig = {
  apiKey: "AIzaSyA82zcPEsxhD4dAnJ6c_QotN8n7hqrPsEw",
  authDomain: "yv-api-5737d.firebaseapp.com",
  databaseURL: "https://yv-api-5737d.firebaseio.com",
  projectId: "yv-api-5737d",
  storageBucket: "yv-api-5737d.appspot.com",
  messagingSenderId: "1067244693931",
  appId: "1:1067244693931:web:dfe0203bc9fe77e646caee",
  measurementId: "G-55VK3ZZZ20"
};

firebase.initializeApp(firebaseConfig)
firebase.analytics()
firebase.analytics().logEvent('session active')

export function changeChapter(book, chapter) {
  return dispatch => {
    dispatch({ type: FETCH_VERSE_COUNT });
    dispatch({ type: CHANGE_CHAPTER, payload: chapter })

    const location = `${book}/${chapter}`
    var yv_core_ref = firebase.database().ref(`yv/count/${location}`)
    yv_core_ref.once('value')
      .then(response => {
        dispatch({ type: VERSE_COUNT_SUCCESS, payload: response })
      }
    )
  }
}

export function changeVerse(book, chapter, verse) {
  return dispatch => {
    dispatch({ type: CHANGE_VERSE, payload: verse })

    const location = `${book}/${chapter}/${verse}`

    var yv_core_ref = firebase.database().ref(`yv/yv_core/${location}`)
    yv_core_ref.once('value')
      .then(response => {
        dispatch({ type: VERSE_TEXT_SUCCESS, payload: response })
      }
    )

    var vlm_ref = firebase.database().ref(`yv/vlm/${location}`)
    vlm_ref.once('value')
      .then(response => {
        dispatch({ type: COMM_TEXT_SUCCESS, payload: response })
      }
    )

    var abs_ref = firebase.database().ref(`yv/abs/${location}`)
    abs_ref.once('value')
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
    dispatch({
      type: CHAPTER_COUNT_SUCCESS,
      payload: mapping[book]
    })
  }
}
