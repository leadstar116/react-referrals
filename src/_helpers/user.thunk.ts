import { ThunkDispatch } from 'redux-thunk'
import { Action } from "redux"
import { userLogInSuccess, userLogInFailure } from '../_actions/user.actions'
import { history } from '../_helpers/history'

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
            history.push('/')
        } else {
            dispatch(userLogInFailure(result.message))
        }
    } catch(e) {
        dispatch(userLogInFailure(e))
    }
}