import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    show: true,
    passwordArea: false,
    email: "",
    password: ""
}
export const SignInSlice = createSlice({
    name: "SignIn",
    initialState,
    reducers: {
        openSignInModal: (state) => {
            state.show = true;
        },
        closeSignInModal: (state) => {
            state.show = false
        },
        openPasswordModal: (state) => {
            state.passwordArea = true
        },
        closePasswordModal: (state) => {
            state.passwordArea = false
        },
        setEmail: (state, actions) => {
            state.email = actions.payload
        },
        setPassword: (state, actions) => {
            state.password = actions.payload

        }
    }
})
export default SignInSlice.reducer
export const { openSignInModal, closeSignInModal, openPasswordModal, closePasswordModal, setEmail, setPassword } = SignInSlice.actions
