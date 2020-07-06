import React, { FormEvent, useState, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { UserData } from '../_constants/user.interface'
import { userRegister } from '../_helpers/user.thunk'
import { AlertData } from '../_constants/alert.interface'

type Props = {
    alertState: AlertData,
    handleRegister: (userData: UserData) => {}
}

function RegisterPage(props: Props) {
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        referralToken: ''
    } as UserData)
    const [submitted, setSubmitted] = useState(false)

    function handleInputChanged(e: ChangeEvent) {
        const {name, value} = e.target as HTMLTextAreaElement
        setInputs(inputs => ({...inputs, [name]: value}))
    }
    function handleSubmit(e: FormEvent){
        e.preventDefault()
        setSubmitted(true)
        if(inputs.firstName
            && inputs.lastName
            && inputs.email
            && inputs.password) {
            props.handleRegister(inputs)
        }
    }
    return (
        <div className="col-lg-8 offset-lg-2">
            <h2 className="mb-4">Register</h2>
            {props.alertState !== undefined &&
                <div className={props.alertState.alertClass}>
                    {props.alertState.alertMessage}
                </div>
            }
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">Firstname</label>
                    <input
                        type="text"
                        name="firstName"
                        value={inputs.firstName}
                        onChange={handleInputChanged}
                        className={'form-control' + (submitted&&!inputs.firstName ? ' is-invalid' : '')}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Lastname</label>
                    <input
                        type="text"
                        name="lastName"
                        value={inputs.lastName}
                        onChange={handleInputChanged}
                        className={'form-control' + (submitted&&!inputs.lastName ? ' is-invalid' : '')}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={inputs.email}
                        onChange={handleInputChanged}
                        className={'form-control' + (submitted&&!inputs.email ? ' is-invalid' : '')}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleInputChanged}
                        className={'form-control' + (submitted&&!inputs.password ? ' is-invalid' : '')}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="referralToken">ReferralToken</label>
                    <input
                        type="text"
                        name="referralToken"
                        value={inputs.referralToken}
                        onChange={handleInputChanged}
                        className={'form-control'}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn-primary btn mr-1">Register</button>
                    <Link to="/login" className="ml-1">Login</Link>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state: {alertReducer: AlertData}) => ({
    alertState: state.alertReducer
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction> ) => ({
    handleRegister: (userData: UserData) => dispatch(userRegister(userData))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)