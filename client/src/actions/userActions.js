import axios from 'axios'
import { USER_INFO_SUCCESS, USER_INFO_FAIL } from '../constants/userConstants'

export const saveUserInfo = (data) => async (dispatch) => {
    try {
        // const { email, firstName, lastName } = data
        // const temp = {
        //     email,
        //     name: firstName + ' ' + lastName
        // }
        // console.log(data);
        dispatch({
            type: USER_INFO_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_INFO_FAIL,
        })
    }
}