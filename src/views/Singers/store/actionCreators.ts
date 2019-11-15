import { fromJS } from 'immutable'
import { getSingerListRequest, getHotSingerListRequest } from '@/api/request'
import {
  CHANGE_SINGER_LIST,
  CHANGE_LIST_OFFSET,
  CHANGE_CATEGORY,
  CHANGE_ALPHA
} from './constants'

export const changeSingerList = (data: any) => ({
  type: CHANGE_SINGER_LIST,
  data: fromJS(data)
})

export const changeListOffset = (data: any) => ({
  type: CHANGE_LIST_OFFSET,
  data
})

export const changeCategory = (data: any) => ({
  type: CHANGE_CATEGORY,
  data
})

export const changeAlpha = (data: any) => ({
  type: CHANGE_ALPHA,
  data
})

export const getSingersList = () => {
  return async (dispatch: any, getState: any) => {
    const offset = getState().getIn(['singers', 'listOffset']);
    const category = getState().getIn(['singers', 'category']);
    const alpha = getState().getIn(['singers', 'alpha']);
    const { artists }: any = await getSingerListRequest(category, alpha, offset);
    dispatch(changeSingerList(artists))
  }
}

export const getHotSingersList = () => {
  return async (dispatch: any) => {
    const { artists }: any = await getHotSingerListRequest(0);
    dispatch(changeSingerList(artists));
    dispatch(changeListOffset(artists.length));
  }
};