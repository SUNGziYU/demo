import { fromJS } from 'immutable';


const defaultState = fromJS({
  topiclist: [],
  listlist: [],
  recommendlist: [],
  writer: [],
  show: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    topiclist: fromJS(action.result.topiclist),
    listlist: fromJS(action.result.listlist),
    recommendlist: fromJS(action.result.recommendlist),
    writer: fromJS(action.result.writer)
  });
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GETLIST':
      return changeHomeData(state, action);
    case 'CHANGESHOW':
      return state.set('show', action.show)
    default: return state
  }
}