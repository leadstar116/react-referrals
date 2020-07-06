import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoggedInUser } from '../_constants/user.interface';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { userLogout } from '../_helpers/user.thunk';

type Props = {
    userState: UserState
    userLogOut: () => {}
}

function HomePage( props: Props ) {
    function handleLogOut() {
        props.userLogOut()
    }

    if(props.userState.isLoggedIn) {
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

type UserState = {
    isLoggedIn: false,
    loggedInUser: LoggedInUser
}

const mapStateToProps = (state: { userReducer: UserState; }) => ({
    userState: state.userReducer
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
    userLogOut: () => dispatch(userLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)