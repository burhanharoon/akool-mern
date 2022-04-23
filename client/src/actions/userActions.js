import { USER_INFO_SUCCESS } from '../constants/userConstants'

export const saveUserInfo = (data) => async (dispatch) => {
    const { email, firstName, lastName, _id } = data
    const temp = {
        id: _id,
        email,
        name: firstName + ' ' + lastName
    }
    localStorage.setItem('user', JSON.stringify(temp))
    console.log(JSON.parse(localStorage.getItem('user')));
    dispatch({
        type: USER_INFO_SUCCESS,
        payload: temp
    })
}