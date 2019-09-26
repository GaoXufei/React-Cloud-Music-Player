import * as actionsType from './constants';
import { fromJS } from 'immutable'
import { getBannerRequest, getRecommendListRequest } from '@/api/request'

export const changeBannerList = (data: any) => ({
  type: actionsType.CHANG_BANNER,
  data: fromJS(data)
})

export const changeRecommendList = (data: any) => ({
  type: actionsType.CHANG_RECOMMEND_LIST,
  data: fromJS(data)
})


// 获取banner
export const getBannerList = () => {
  return async (dispatch: any) => {
    try {
      const { banners }: any = await getBannerRequest();
      const action = changeBannerList(banners);
      dispatch(action)
    } catch (e) {
      console.log(e)
    }
  }
}
// 获取首页列表
export const getRecommendList = () => {
  return async (dispatch: any) => {
    try {
      const { result }: any = await getRecommendListRequest();
      const action = changeRecommendList(result);
      dispatch(action);
    } catch (e) {
      console.log(e)
    }
  }
}