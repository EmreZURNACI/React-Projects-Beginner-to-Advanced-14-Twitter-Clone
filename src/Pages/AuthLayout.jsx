import React from 'react'
import Auth from "./Auth";
import SıgnIn from './SıgnIn';
import SignUp from './SignUp'
import { Toaster } from 'react-hot-toast';
import PasswordEmailSignIn from '../Pages/PasswordEmailSignIn'
import PasswordEmailSignUp from '../Pages/PasswordEmailSignUp'

function AuthLayout() {
  return (
    <>
      <Toaster position='top right' />
      <Auth />
      <SıgnIn />
      <SignUp />
      <PasswordEmailSignIn />
      <PasswordEmailSignUp />
    </>
  )
}

export default AuthLayout