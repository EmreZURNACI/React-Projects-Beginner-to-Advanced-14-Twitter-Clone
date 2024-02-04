import { configureStore } from "@reduxjs/toolkit";
import SignInReducer from './SignInSlice'
import SignUpReducer from './SignUpSlice'
import AuthReducer from './AuthSlice'
export const Store = configureStore({
    reducer: {
        SignInReducer: SignInReducer,
        SignUpReducer: SignUpReducer,
        AuthReducer: AuthReducer
    }
})
