import * as actionTypes from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  category: "",
  alpha: "",
  singerList: [],
  listOffset: 0,
  enterLoading: true,
  pullUpLoading: false,
  pullDownLoading: false
})

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case actionTypes.CHANGE_ALPHA:
      return state.set('alpha', action.data);
    case actionTypes.CHANGE_CATEGORY:
      return state.set('category', action.data);
    case actionTypes.CHANGE_LIST_OFFSET:
      return state.set('listOffset', action.data);
    case actionTypes.CHANGE_SINGER_LIST:
      return state.set('singerList', action.data);
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set('enterLoading', action.data);
    case actionTypes.CHANGE_PULLUP_LOADING:
      return state.set('pullUpLoading', action.data);
    case actionTypes.CHANGE_PULLDOWN_LOADING:
      return state.set('pullDownLoading', action.data);
    default:
      return state;
  }
}