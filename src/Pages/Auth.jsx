import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openSignInModal } from '../Features/SignInSlice'
import { openSignUpModal } from '../Features/SignUpSlice'
function Auth() {
    const signInModal = useSelector((state) => state.SignInReducer.show)
    const signUpModal = useSelector((state) => state.SignUpReducer.show)
    const dispatch = useDispatch();
    return (
        <div className={`fixed bottom-0 right-0 left-0 w-full h-20 bg-blue-400  flex items-center justify-center ` + ((signInModal || signUpModal) ? "z-40" : "z-50")}>
            <div className="w-3/5 flex justify-between items-center">
                <div>
                    <p className="text-2xl text-white font-bold">Olup bitenleri kaçırma</p>
                    <p className="text-md text-white">Haberleri önce X'teki kişiler alır.</p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-transparent  text-white border border-white font-bold py-1 px-4 rounded-full"
                        onClick={() => dispatch(openSignInModal())}>
                        Giriş Yap
                    </button>
                    <button className="bg-white  text-gray-600 font-bold py-1 px-4 rounded-full"
                        onClick={() => dispatch(openSignUpModal())}>
                        Kaydol
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Auth