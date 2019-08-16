import * as actionsType from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  bannerList: []
});

export default (state: any = defaultState, action: { type: string, data: any }) => {
  switch (action.type) {
    case actionsType.CHANG_BANNER:
      return state.set('bannerList', action.data)
    default:
      return state;
  }
}