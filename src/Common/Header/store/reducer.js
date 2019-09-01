import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    moused: false,
    page: 1,
    totalpage:1,
    list: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false);
        case actionTypes.INIT_LIST:
            return state.merge({
                list: action.data,
                totalpage: action.totalpage,
            })
        case actionTypes.MOUSEIN:
            return state.set('moused',true);
        case actionTypes.MOUSEOUT:
            return state.set('moused',false);
        case actionTypes.CHANGEPAGE:
            return state.merge({
                page: action.page
            })
        default: return state
    }
}
