import { UserData, LoggedInUser } from '../_constants/user.interface'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const userLogInSuccess = (loggedInUser: LoggedInUser) => ({
    type: USER_LOGIN_SUCCESS,
    payload: { loggedInUser }
})

export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'
export const userLogInFailure = (error: string) => ({
    type: USER_LOGIN_SUCCESS,
    payload: { error }
})

export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const userRegisterSuccess = (user: UserData) => ({
    type: USER_REGISTER_SUCCESS,
    payload: { user }
})

export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE'
export const userRegisterFailure = (error: string) => ({
    type: USER_REGISTER_FAILURE,
    payload: { error }
})