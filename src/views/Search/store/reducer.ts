import * as actionTypes from './constants';
import { fromJS } from 'immutable'

const defaultState = fromJS({
  hotList: [],
  suggestList: [],
  songsList: []
});

export default (state: any = defaultState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_HOT_KEYWORDS:
      return state.set('hotList', action.data);
    case actionTypes.SET_SUGGEST_LIST:
      return state.set('suggestList', action.data);
    case actionTypes.SET_RESULT_SONGS_LIST:
      return state.set('songsList', action.data)
    default:
      return state;
  }
}