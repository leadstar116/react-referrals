import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoggedInUser } from '../_constants/user.interface';

type Props = {
    userState: UserState
}

function HomePage( props: Props ) {
    if(props.userState.isLoggedIn) {
        return (
            <div className="">
                <h2>HomePage</h2>
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

const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)