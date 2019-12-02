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
    try {
      const offset = getState().getIn(['singers', 'listOffset']);
      const category = getState().getIn(['singers', 'category']);
      const alpha = getState().getIn(['singers', 'alpha']);
      const { artists }: any = await getSingerListRequest(category, alpha, offset);
      dispatch(changeSingerList(artists))
      dispatch(changeEnterLoading(false));
      dispatch(changePullDownLoading(false));
      dispatch(changeListOffset(artists.length));
    } catch (e) {
      console.log(
        `**歌手数据错误**`,
        e
      );
    }
  }
}

// function -> 获取热门歌手列表
export const getHotSingersList = () => {
  return async (dispatch: any) => {
    try {
      const { artists }: any = await getHotSingerListRequest(0);
      dispatch(changeSingerList(artists));
      dispatch(changeListOffset(artists.length));
      dispatch(changeEnterLoading(false));
      dispatch(changePullDownLoading(false));
    } catch (e) {
      console.log(
        `**热门歌手数据错误**`,
        e
      );
    }
  }
};

// function -> 刷新多更(热门)
export const refreshMoreHotSingerList = () => {
  return async (dispatch: any, getState: any) => {
    try {
      const offset = getState().getIn(['singers', 'listOffset']);
      const singerList = getState().getIn(['singers', 'singerList']).toJS();
      const { artists }: any = await getHotSingerListRequest(offset);
      const data = [...singerList, ...artists];
      dispatch(changeSingerList(data));
      dispatch(changePullUpLoading(false));
      dispatch(changeListOffset(data.length));
    } catch (e) {
      console.log(
        `**下拉更多数据（热门）错误**`,
        e
      );
    }
  }
}

// function -> 刷新更多
export const refreshMoreSingerList = () => {
  return async (dispatch: any, getState: any) => {
    try {
      const category = getState().getIn(['singers', 'category']);
      const alpha = getState().getIn(['singers', 'alpha']);
      const offset = getState().getIn(['singers', 'listOffset']);
      const singerList = getState().getIn(['singers', 'singerList']).toJS();
      const { artists }: any = await getSingerListRequest(category, alpha, offset);
      const data = [...singerList, ...artists];
      dispatch(changeSingerList(data));
      dispatch(changePullUpLoading(false));
      dispatch(changeListOffset(data.length));
    } catch (e) {
      console.log(
        `**下拉更多数据错误**`,
        e
      );
    }
  }
}