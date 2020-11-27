import React from 'react'
import '../assets/styles/main.scss'
import Button from '@material-ui/core/Button'
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
function Login() {
  const [state, dispatch] = useStateValue()
  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user)
        dispatch({ type: actionTypes.SET_USER, user: result.user })
      })
      .catch((error) => {
        alert(error.message)
      })
  }
  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg'
          alt=''
        />
        <h1>Sign in to join the Meeting</h1>
        <p>temel.us</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  )
}

export default Login
