import React, { FormEvent, useState, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'

function RegisterPage() {
    const [inputs, setInputs] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        referralToken: ''
    })
    const [submitted, setSubmitted] = useState(false)

    function handleInputChanged(e: ChangeEvent) {
        const {name, value} = e.target as HTMLTextAreaElement
        setInputs(inputs => ({...inputs, [name]: value}))
    }
    function handleSubmit(e: FormEvent){
        e.preventDefault()
        setSubmitted(true)
    }
    return (
        <div className="col-lg-8 offset-lg-2">
            <h2 className="mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstname">Firstname</label>
                    <input
                        type="text"
                        name="firstname"
                        value={inputs.firstname}
                        onChange={handleInputChanged}
                        className={'form-control' + (submitted&&!inputs.firstname ? ' is-invalid' : '')}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Lastname</label>
                    <input
                        type="text"
                        name="lastname"
                        value={inputs.lastname}
                        onChange={handleInputChanged}
                        className={'form-control' + (submitted&&!inputs.firstname ? ' is-invalid' : '')}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={inputs.email}
                        onChange={handleInputChanged}
                        className={'form-control' + (submitted&&!inputs.firstname ? ' is-invalid' : '')}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleInputChanged}
                        className={'form-control' + (submitted&&!inputs.firstname ? ' is-invalid' : '')}
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