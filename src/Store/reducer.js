import { combineReducers } from 'redux-immutable';
import { headerReducer } from '../Common/Header/store';
import { reducer as homeReducer } from '../Common/Home/store';
import { reducer as detailReducer } from '../Common/detail/store/index'

const reducer = combineReducers({
  header: headerReducer,
  Home: homeReducer,
  detail: detailReducer,
})

export default reducer;
