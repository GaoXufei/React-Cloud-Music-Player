import { axiosInstance } from './config';
// GET 首页 轮播
export const getBannerRequest = () => axiosInstance.get(`/banner`)
// GET 首页 推荐
export const getRecommendListRequest = () => axiosInstance.get(`/personalized`);
// GET 搜索 获取热门关键字
export const getHotKeyWordsRequest = () => axiosInstance.get(`/search/hot`);
// GET 获取歌手列表/专辑列表 { query -> 关键字 }
export const getSuggestListRequest = (query: string) => axiosInstance.get(`/search/suggest?keywords=${query}`);
// GET 获取歌曲列表 { query -> 关键字 }
export const getResultSongsListRequest = (query: string) => axiosInstance.get(`/search?keywords=${query}`);
// GET 获取详情列表 { id -> 详情id }
export const getRecommendDetailRequest = (id: number) => axiosInstance.get(`/playlist/detail?id=${id}`);
// GET 获取详情列表 { id -> 详情id }
export const getRankDetailRequest = (id: number) => axiosInstance.get(`/playlist/detail?id=${id}`);