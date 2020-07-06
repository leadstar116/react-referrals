import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_REGISTER_FAILURE,
    USER_REGISTER_SUCCESS
} from '../_actions/user.actions'
import { UserData, LoggedInUser, AlertData } from '../_constants/user.interface';

type initialState = {
    user: UserData,
    isLoggedIn: false,
    loggedInUser: LoggedInUser,
    alertData: AlertData,
}

const userState: initialState = {
    user: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        referralToken: '',
    },
    isLoggedIn: false,
    loggedInUser: {
        id: 0,
        token: ''
    },
    alertData: {
        alertClass: '',
        alertMessage: ''
    },
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
                alertData: {
                    alertMessage: payload.error,
                    alertClass: 'alert alert-danger'
                }
            }
        }
        case USER_REGISTER_SUCCESS: {
            return {
                ...state,
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