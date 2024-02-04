import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    auth: ""
}
export const AuthSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        authIn: (state, action) => {
            state.auth = action.payload
        }
    }
})
export default AuthSlice.reducer
export const { authIn } = AuthSlice.actions
