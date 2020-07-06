import { ThunkDispatch } from 'redux-thunk'
import { Action } from "redux"
import { userLogInSuccess, userLogInFailure, userLogoutSuccess } from '../_actions/user.actions'
import { history } from '../_helpers/history'
import { alertSuccess, alertFailure } from '../_actions/alert.actions';

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
            dispatch(alertSuccess(result))
            history.push('/')
        } else {
            dispatch(userLogInFailure(result.message))
            dispatch(alertFailure(result.message))
        }
    } catch(e) {
        dispatch(userLogInFailure(e))
        dispatch(alertFailure(e))
    }
}

export const userLogout = () => async (dispatch: MyThunkDispatch) => {
    dispatch(userLogoutSuccess())
    dispatch(alertSuccess('You are now logged out!'))
    history.push('/login')
}