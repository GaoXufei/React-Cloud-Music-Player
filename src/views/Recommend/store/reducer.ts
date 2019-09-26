import * as actionsType from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  bannerList: [],
  recommendList: []
});

export default (state: any = defaultState, action: { type: string, data: any }) => {
  switch (action.type) {
    case actionsType.CHANG_BANNER:
      return state.set('bannerList', action.data)
    case actionsType.CHANG_RECOMMEND_LIST:
      return state.set('recommendList', action.data)
    default:
      return state;
  }
}