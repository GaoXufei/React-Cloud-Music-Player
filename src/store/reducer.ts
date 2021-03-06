import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '@/views/Recommend/store/'
import { reducer as searchReducer } from '@/views/Search/store'
import { reducer as albumReducer } from '@/views/Album/store'
import { reducer as singerList } from '@/views/Singers/store'

export default combineReducers({
  recommend: recommendReducer,
  search: searchReducer,
  album: albumReducer,
  singers: singerList
})