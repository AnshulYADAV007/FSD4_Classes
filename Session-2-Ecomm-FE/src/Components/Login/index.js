import React, { useState } from 'react'
import { signin, signup } from '../../API/Auth'
import './login.css'

const Login = () => {
  const [username, setusername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [showSignup, setShowSignup] = useState(false)
  const [authMessage, setAuthMessage] = useState('Hello')
  const [signupSuccess, setSignupSuccess] = useState(false)

  const toggleSignup = () => {
    setAuthMessage('')
    setShowSignup(!showSignup)
  }

  const signinHandler = async () => {
    let user = { username, password }
    let response = await signin(user)
    if (response.status === 200) {
      setAuthMessage('Login Successful')
    }
    console.log(response)
  }

  const signupHandler = async () => {
    let user = { username, password, email }
    let response = await signup(user)
    if (response.status === 200) {
      setSignupSuccess(true)
      setAuthMessage('Signup Successful')
    }
    console.log(response)
  }

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="home-title text-center">Welcome to InstaShop</h2>
            <div className="login-wrapper">
              <h4 className="text-center">
                {showSignup ? 'Sign up' : 'Login'}
              </h4>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="username"
                  id="username"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  autoComplete="off"
                  autoFocus
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                />
              </div>

              {showSignup && (
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                  />
                </div>
              )}

              <div className="input-group">
                <input
                  type="submit"
                  className="form-control btn btn-primary"
                  value={showSignup ? 'Sign Up' : 'Log In'}
                  onClick={showSignup ? signupHandler : signinHandler}
                />
              </div>
              <div className="signup-btn" onClick={toggleSignup}>
                {showSignup
                  ? 'Already have an Account ? Login'
                  : "Don't have an Account? Signup"}
              </div>
              <div
                className={
                  signupSuccess
                    ? 'auth-msg text-info text-center'
                    : 'auth-msg text-danger text-center'
                }
              >
                {authMessage}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
