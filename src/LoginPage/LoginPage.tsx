import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userLogin } from '../_helpers/user.thunk'
import { UserData, AlertData } from '../_constants/user.interface'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

type Props = {
    userState: LoginState,
    handleLogin: (email:string, password: string) => void,
}

function LoginPage(props: Props) {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })
    const [submitted, setSubmitted] = useState(false)

    function handleInputsChanged(e: ChangeEvent) {
        const { name, value } = e.target as HTMLTextAreaElement
        setInputs(inputs => ({...inputs, [name]: value}))
    }
    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        setSubmitted(true)

        if(inputs.username && inputs.password) {
            props.handleLogin(inputs.username, inputs.password)
        }
    }
    return (
        <div className="col-lg-8 offset-lg-2">
            <h2 className="mb-4">Login</h2>
            {!props.userState.isLoggedIn &&
                <div className={props.userState.alertData.alertClass}>
                    {props.userState.alertData.alertMessage}
                </div>
            }
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text"
                        name="username"
                        value={inputs.username}
                        onChange={handleInputsChanged}
                        className={'form-control' + (submitted && !inputs.username ? ' is-invalid':'')}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleInputsChanged}
                        className={"form-control" + (submitted && !inputs.password ? ' is-invalid':'')}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn-primary btn mr-1">Login</button>
                    <Link to="/register" className="ml-1">Register</Link>
                </div>
            </form>
        </div>
    )
}

interface LoginState {
    isLoggedIn: boolean,
    user: UserData,
    alertData: AlertData,
}

const mapStateToProps = (state: {userReducer: LoginState}) => ({
    userState: state.userReducer
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
    handleLogin: (email:string, password: string) => dispatch(userLogin(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)