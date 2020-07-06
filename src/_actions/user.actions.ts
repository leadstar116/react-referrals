import { UserData, LoggedInUser } from '../_constants/user.interface'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const userLogInSuccess = (loggedInUser: LoggedInUser) => ({
    type: USER_LOGIN_SUCCESS,
    payload: { loggedInUser }
})

export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'
export const userLogInFailure = () => ({
    type: USER_LOGIN_FAILURE,
    payload: {}
})

export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const userRegisterSuccess = (loggedInUser: LoggedInUser) => ({
    type: USER_REGISTER_SUCCESS,
    payload: { loggedInUser }
})

export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE'
export const userRegisterFailure = () => ({
    type: USER_REGISTER_FAILURE,
    payload: {}
})

export const USER_LOGOUT = 'USER_LOGOUT'
export const userLogoutSuccess = () => ({
    type: USER_LOGOUT,
    payload: {}
})