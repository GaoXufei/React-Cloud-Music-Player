import {
  SET_HOT_KEYWORDS,
  SET_SUGGEST_LIST,
  SET_RESULT_SONGS_LIST,
  SET_ENTER_LOADING
} from './constants'
import { fromJS } from 'immutable'
import {
  getHotKeyWordsRequest,
  getSuggestListRequest,
  getResultSongsListRequest
} from '@/api/request'

// 热门搜索
const changeHotKeyWords = (data: any) => ({
  type: SET_HOT_KEYWORDS,
  data: fromJS(data)
});
// 相关歌手 { artists } / 相关歌单 { playlists }
const changeSuggestList = (data: any) => ({
  type: SET_SUGGEST_LIST,
  data: fromJS(data)
})

// 相关歌曲列表
const changeResultSongs = (data: any) => ({
  type: SET_RESULT_SONGS_LIST,
  data: fromJS(data)
})

// 加载状态
export const changeEnterLoading = (bool: boolean) => ({
  type: SET_ENTER_LOADING,
  data: bool
})

export const getHotKeyWords = () => {
  return async (dispatch: any) => {
    try {
      const { result }: any = await getHotKeyWordsRequest();
      const { hots = [] }: any = result;
      dispatch(changeHotKeyWords(hots))
    } catch (e) {
      console.log(e)
    }
  }
}

export const getSuggestList = (query: string) => {
  return async (dispatch: any) => {
    // 作用域隔离
    {
      const { result = {} }: any = await getSuggestListRequest(query);
      dispatch(changeSuggestList(result))
    }
    // 作用域隔离
    {
      const { result }: any = await getResultSongsListRequest(query);
      const { songs = [] }: any = result;
      dispatch(changeResultSongs(songs));
    }
    // 获取完所有数据之后关闭动画
    dispatch(changeEnterLoading(false));

  }
}