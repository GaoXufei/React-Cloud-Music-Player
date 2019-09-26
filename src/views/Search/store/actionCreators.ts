import { SET_HOT_KEYWORDS, SET_SUGGEST_LIST } from './constants'
import { fromJS } from 'immutable'
import { getHotKeyWordsRequest, getSuggestListRequest } from '@/api/request'

const changeHotKey = (data: any) => ({
  type: SET_HOT_KEYWORDS,
  data: fromJS(data)
});

const changeSuggestList = (data: any) => ({
  type: SET_SUGGEST_LIST,
  data: fromJS(data)
})

export const getHotKeyWords = () => {
  return async (dispatch: any) => {
    try {
      const { result }: any = await getHotKeyWordsRequest();
      const { hots }: any = result;
      dispatch(changeHotKey(hots))
    } catch (e) {
      console.log(e)
    }
  }
}