import { axiosInstance } from './config';
// GET 首页 轮播
export const getBannerRequest = () => axiosInstance.get(`/banner`)
// GET 首页 推荐
export const getRecommendListRequest = () => axiosInstance.get(`/personalized`);
// GET 搜索 获取热门关键字
export const getHotKeyWordsRequest = () => axiosInstance.get(`/search/hot`);

export const getSuggestListRequest = (query: string) => axiosInstance.get(`/search/suggest?keywords=${query}`);

export const getResultSongsListRequest = (query: string) => axiosInstance.get(`/search?keywords=${query}`);