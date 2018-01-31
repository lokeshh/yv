import { FETCH_COUNT, FETCH_COUNT_SUCCESS } from '../actions/verseSelectorActions'

export default function(state = false, action) {
  switch(action.type) {
    case FETCH_COUNT:
      return true
    case FETCH_COUNT_SUCCESS:
      console.log(action.payload.data);
      return false
    default:
      return false
  }
}
