import * as actionTypes from './constants';
import { fromJS } from 'immutable'

const defaultState = fromJS({
  hotList: [],
  suggestList: []
});

export default (state: any = defaultState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_HOT_KEYWORDS:
      return state.set('hotList', action.data);
    case actionTypes.SET_SUGGEST_LIST:
      return state.set('suggestList', action.data);
    default:
      return state;
  }
}