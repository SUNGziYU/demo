import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
    type: actionTypes.INIT_LIST,
    data:fromJS(data),
    totalpage: Math.ceil(data.length/10)
})
export const changeFocus = ({
    type: actionTypes.SEARCH_FOCUS
});
export const changeBlur = ({
    type: actionTypes.SEARCH_BLUR
});
export const changeMousein = ({
    type: actionTypes.MOUSEIN
});
export const changeMouseout = ({
    type:actionTypes.MOUSEOUT
})
export const initList = () => {
    return (dispatch) => {
        axios.get('./Api/list.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data))
        }).catch(() => {
            console.log('请求失败')
        })
    }
};
export const changepage = (page) => ({
   type:actionTypes.CHANGEPAGE,
   page: page
})



