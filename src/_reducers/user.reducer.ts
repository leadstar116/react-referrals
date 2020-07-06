import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_REGISTER_FAILURE,
    USER_REGISTER_SUCCESS,
    USER_LOGOUT
} from '../_actions/user.actions'
import { UserData, LoggedInUser } from '../_constants/user.interface';

type initialState = {
    user: UserData,
    isLoggedIn: false,
    loggedInUser: LoggedInUser,
}

const userState: initialState = {
    user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        referralToken: '',
    },
    isLoggedIn: false,
    loggedInUser: {
        id: 0,
        token: ''
    }
}

const userReducer = (state = userState, action: any) => {
    const {type, payload} = action

    switch(type) {
        case USER_LOGIN_SUCCESS: {
            return {
                ...state,
                loggedInUser: payload.loggedInUser,
                isLoggedIn: true
            }
        }
        case USER_LOGIN_FAILURE: {
            return {
                ...state,
                isLoggedIn: false,
            }
        }
        case USER_REGISTER_SUCCESS: {
            return {
                ...state,
                loggedInUser: payload.loggedInUser,
                isLoggedIn: true
            }
        }
        case USER_REGISTER_FAILURE: {
            return {
                ...state,
                isLoggedIn: false
            }
        }
        case USER_LOGOUT: {
            return {
                ...state,
                isLoggedIn: false,
                loggedInUser: {
                    id: 0,
                    token: ''
                }
            }
        }
    }
    return state
}

export default userReducer