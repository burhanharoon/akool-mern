import {
    USER_INFO_FAIL,
    USER_INFO_SUCCESS,
} from '../constants/userConstants'

export const userInfoReducer = (state = { user: { name: "k" } }, action) => {
    switch (action.type) {
        case USER_INFO_SUCCESS:
            console.log("object");
            return { user: action.payload }
        case USER_INFO_FAIL:
            return { user: "null" }
        default:
            return state
    }
}