import { FETCH_VERSE_COUNT, VERSE_COUNT_SUCCESS, CHAPTER_COUNT_SUCCESS,
  CHANGE_BOOK, CHANGE_CHAPTER, CHANGE_VERSE, VERSE_TEXT_SUCCESS
} from '../actions/verseSelectorActions'

const DEFAULT_VERSE = [
  'सन्तोषः परमो लाभः सत्सङ्गः परमा गतिः।',
  'विचारः परमं ज्ञानं शमो हि परमं सुखम्॥'
]

const INITIAL_STATE = {
  maxChapters: 0,
  maxVerses: 0,
  currentBook: 0,
  currentChapter: 0,
  currentVerse: 0,
  loadingVerseCount: false,
  displayVerse: DEFAULT_VERSE
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_VERSE_COUNT:
      return {...state, loadingVerseCount: true}
    case VERSE_COUNT_SUCCESS:
      console.log('here')
      return {...state, loadingVerseCount: false, maxVerses: action.payload.data}
    case CHAPTER_COUNT_SUCCESS:
      return {...state, maxChapters: action.payload}
    case CHANGE_BOOK:
      return {...state, currentBook: action.payload}
    case CHANGE_CHAPTER:
      return {...state, currentChapter: action.payload}
    case VERSE_TEXT_SUCCESS:
      return {...state, displayVerse: action.payload.data}
    default:
      return state
  }
}
