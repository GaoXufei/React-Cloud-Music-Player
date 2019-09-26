import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '@/views/Recommend/store/'
import { reducer as searchReducer } from '@/views/Search/store'

export default combineReducers({
  recommend: recommendReducer,
  search: searchReducer
})