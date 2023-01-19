import React from "react"
import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username' />
        <input required type="email" placeholder='email' />
        <input required type="password" placeholder='password' />
        <button>Register</button>
        <p>This is an error</p>
        <span>
          Do you have an account? <Link to="/Login">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Register