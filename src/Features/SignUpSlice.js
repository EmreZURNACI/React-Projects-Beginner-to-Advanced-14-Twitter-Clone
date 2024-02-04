import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    show: false,
    registerModal: false,
    email: "",
    password: ""
}
export const SignUpSlice = createSlice({
    name: "SignUp",
    initialState,
    reducers: {
        openSignUpModal: (state) => {
            state.show = true;
        },
        closeSignUpModal: (state) => {
            state.show = false
        },
        closeRegisterModal: (state) => {
            state.registerModal = false
        },
        openRegisterModal: (state) => {
            state.registerModal = true
        },
        setEmail: (state, actions) => {
            state.email = actions.payload
        },
        setPassword: (state, actions) => {
            state.password = actions.payload

        }

    }
})
export default SignUpSlice.reducer
export const { openSignUpModal, closeSignUpModal, closeRegisterModal, openRegisterModal,setEmail,setPassword } = SignUpSlice.actions
