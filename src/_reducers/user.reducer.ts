import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_REGISTER_FAILURE,
    USER_REGISTER_SUCCESS
} from '../_actions/user.actions'
import { UserData } from '../_constants/user.interface';

type initialState = {
    user: UserData,
    isLoggedIn: false,
}
const userReducer = (state: initialState, action: any) => {
    const {type, payload} = action

    switch(type) {
        case USER_LOGIN_SUCCESS: {
            return {
                user: payload.user,
                isLoggedIn: true
            }
        }
        case USER_LOGIN_FAILURE: {
            return {
                ...state,
                isLoggedIn: false
            }
        }
        case USER_REGISTER_SUCCESS: {
            return {
                user: payload.user,
                isLoggedIn: true
            }
        }
        case USER_REGISTER_FAILURE: {
            return {
                ...state,
                isLoggedIn: false
            }
        }
    }
    return state
}

export default userReducer