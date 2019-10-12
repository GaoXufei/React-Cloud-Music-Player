import * as actionTypes from './constants'
import { fromJS } from 'immutable'
import { getRecommendDetailRequest, getRankDetailRequest } from '@/api/request'

const changeCurrentAlbum = (data: any) => ({ type: actionTypes.CHANGE_CURRENT_ALBUM, data: fromJS(data) });
const changeTotalCount = (data: any) => ({ type: actionTypes.CHANGE_TOTAL_COUNT, data });

export const changePullUpLoading = (data: any) => ({ type: actionTypes.CHANGE_PULLUP_LOADING, data });
export const changeEnterLoading = (data: any) => ({ type: actionTypes.CHANGE_ENTER_LOADING, data });
export const changeStartIndex = (data: any) => ({ type: actionTypes.CHANGE_START_INDEX, data });
export const changeScrollY = (data: any) => ({ type: actionTypes.CHANGE_SCROLL_Y, data });

export const getAlbumList = (id: number, fromURL: string) => {
  let request: (id: number) => void;
  switch (fromURL) {
    case '/recommend':
      request = getRecommendDetailRequest;
      break;
    case '/rank':
      request = getRankDetailRequest;
      break;
    default:
      request = getRecommendDetailRequest;
  }
  return async (dispatch: any) => {
    const { playlist = {} }: any = await request(id);
    const { tracks = [] }: any = playlist;

    dispatch(changeCurrentAlbum(playlist));
    dispatch(changeEnterLoading(false));
    dispatch(changeStartIndex(0));
    dispatch(changeTotalCount(tracks.length));
  }
}