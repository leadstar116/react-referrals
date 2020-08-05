import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AlertData } from '../_constants/alert.interface';
import { LoggedInUser } from '../_constants/user.interface';
import { userLogout } from '../_helpers/user.thunk';

type UserState = {
    isLoggedIn: false,
    loggedInUser: LoggedInUser
}

interface initialState {
    userReducer: UserState,
    alertReducer: AlertData
}

function HomePage() {
    const dispatch = useDispatch()
    const userState = useSelector((state:initialState) => state.userReducer)

    function handleLogOut() {
        dispatch(userLogout())
    }

    if(userState.isLoggedIn) {
        return (
            <div className="">
                <h2>HomePage</h2>
                <button onClick={handleLogOut}>LogOut</button>
            </div>
        )
    }
    return (
        <Redirect to="/login" />
    )
}

export default HomePage