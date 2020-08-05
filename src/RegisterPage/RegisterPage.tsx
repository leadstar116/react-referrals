import React, { FormEvent, useState, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { UserData } from '../_constants/user.interface'
import { userRegister } from '../_helpers/user.thunk'
import { AlertData } from '../_constants/alert.interface'

interface initialState {
    alertReducer: AlertData
}

function RegisterPage() {
    const dispatch = useDispatch()
    const alertState = useSelector((state:initialState) => state.alertReducer)

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
            dispatch(userRegister(inputs))
        }
    }
    return (
        <div className="col-lg-8 offset-lg-2">
            <h2 className="mb-4">Register</h2>
            {alertState !== undefined &&
                <div className={alertState.alertClass}>
                    {alertState.alertMessage}
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

export default RegisterPage