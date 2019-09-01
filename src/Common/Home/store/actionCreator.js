import axios from 'axios';




const gethomelist = (result) => ({
    type: 'GETLIST',
    result
})

export const getlist = () => {
    return (dispatch) => {
        axios.get('./Api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(gethomelist(result))
        })
    }
}

export const changeshow = (show) => ({
    type: 'CHANGESHOW',
    show
})