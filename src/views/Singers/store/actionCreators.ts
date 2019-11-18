import { fromJS } from 'immutable'
import { getSingerListRequest, getHotSingerListRequest } from '@/api/request'
import {
  CHANGE_SINGER_LIST,
  CHANGE_LIST_OFFSET,
  CHANGE_CATEGORY,
  CHANGE_ALPHA,
  CHANGE_ENTER_LOADING,
  CHANGE_PULLUP_LOADING,
  CHANGE_PULLDOWN_LOADING
} from './constants'

// 歌手列表
export const changeSingerList = (data: any) => ({
  type: CHANGE_SINGER_LIST,
  data: fromJS(data)
})

// 歌手列表条目数
export const changeListOffset = (data: any) => ({
  type: CHANGE_LIST_OFFSET,
  data
})

// 筛选类别
export const changeCategory = (data: any) => ({
  type: CHANGE_CATEGORY,
  data
})

// 
export const changeAlpha = (data: any) => ({
  type: CHANGE_ALPHA,
  data
})

// loading状态
export const changeEnterLoading = (data: any) => ({
  type: CHANGE_ENTER_LOADING,
  data
})

// 上拉加载状态
export const changePullUpLoading = (data: any) => ({
  type: CHANGE_PULLUP_LOADING,
  data
})

// 下滑加载状态
export const changePullDownLoading = (data: any) => ({
  type: CHANGE_PULLDOWN_LOADING,
  data
})

// function -> 获取歌手列表 { 筛选 }
export const getSingersList = () => {
  return async (dispatch: any, getState: any) => {
    const offset = getState().getIn(['singers', 'listOffset']);
    const category = getState().getIn(['singers', 'category']);
    const alpha = getState().getIn(['singers', 'alpha']);
    const { artists }: any = await getSingerListRequest(category, alpha, offset);
    dispatch(changeSingerList(artists))
    dispatch(changeEnterLoading(false));
    dispatch(changePullDownLoading(false));
    dispatch(changeListOffset(artists.length));
  }
}

// function -> 获取热门歌手列表
export const getHotSingersList = () => {
  return async (dispatch: any) => {
    const { artists }: any = await getHotSingerListRequest(0);
    dispatch(changeSingerList(artists));
    dispatch(changeListOffset(artists.length));
    dispatch(changeEnterLoading(false));
    dispatch(changePullDownLoading(false));
  }
};

// function -> 关键字查找
