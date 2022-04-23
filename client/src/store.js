import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userInfoReducer } from './reducers/userReducers'

const reducer = combineReducers({
    userInfo: userInfoReducer,
})

// // Getting the user info form the local storage and saving it in the initial storage of our reducer
// const userInfoFromStorage = localStorage.getItem('token')
//     ? JSON.parse(localStorage.getItem('token'))
//     : null

// const initialState = {
//     userLogin: { userInfo: userInfoFromStorage }
// }

const middleware = [thunk]

const store = createStore(
    reducer,
    // initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store