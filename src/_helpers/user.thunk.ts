import { ThunkDispatch } from 'redux-thunk'
import { Action } from "redux"
import { userLogInSuccess, userLogInFailure, userLogoutSuccess, userRegisterFailure, userRegisterSuccess } from '../_actions/user.actions'
import { history } from '../_helpers/history'
import { alertSuccess, alertFailure } from '../_actions/alert.actions';
import { UserData } from '../_constants/user.interface';

type MyRootState = {};
type MyExtraArg = undefined;
type MyThunkDispatch = ThunkDispatch<MyRootState, MyExtraArg, Action>;

export const userLogin = (email: string, password: string) => async (dispatch: MyThunkDispatch) => {
    try {
        const response = await fetch(`http://localhost:8080/api/v1/auth/login`, {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const result = await response.json()
        if(response.status === 200) {
            dispatch(userLogInSuccess(result))
            dispatch(alertSuccess('Logged in successfully!'))
            history.push('/')
        } else {
            dispatch(userLogInFailure())
            dispatch(alertFailure(result.message))
        }
    } catch(e) {
        dispatch(userLogInFailure())
        dispatch(alertFailure('Failed to fetch'))
    }
}

export const userLogout = () => async (dispatch: MyThunkDispatch) => {
    dispatch(userLogoutSuccess())
    dispatch(alertSuccess('You are now logged out!'))
    history.push('/login')
}

export const userRegister = (userData: UserData) => async (dispatch: MyThunkDispatch) => {
    try {
        let response = await fetch('http://localhost:8080/api/v1/auth/register', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(userData),
        })

        const result = await response.json()
        if(response.status === 200) {
            dispatch(userRegisterSuccess(result))
            dispatch(alertSuccess('User successfully created!'))
            history.push('/')
        } else {
            dispatch(userRegisterFailure())
            dispatch(alertFailure(result.message))
        }
    } catch(e) {
        dispatch(userRegisterFailure())
        dispatch(alertFailure(e))
    }
}