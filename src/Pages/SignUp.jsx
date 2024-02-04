import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RxCross2 } from 'react-icons/rx'
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'
import { closeSignUpModal, openRegisterModal } from '../Features/SignUpSlice'
import { openSignInModal } from '../Features/SignInSlice'
import { auth, provider } from '../Services/config'
import { signInWithPopup } from 'firebase/auth'
import { v4 as uuid } from "uuid";
function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const SignUpModal = useSelector((state) => state.SignUpReducer.show)
    const googleAuth = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                sessionStorage.setItem("token", uuid())
                navigate("home")
            })
            .catch((error) => {
                console.log("Caught error Popup closed " + error);
            });
    }
    return (
        <>
            {SignUpModal ? (
                <>
                    <div className={`fixed top-0 left-0 bottom-0 w-full h-full flex items-center justify-center ` + (SignUpModal ? "z-50" : "z-40")}>
                        <div className='bg-black w-1/3 h-2/3 rounded-2xl relative flex flex-col justify-center'>
                            <div className='absolute flex justify-start items-center p-2 top-1'>
                                <button className='bg-181919 rounded-full p-1 duration-300 transition-all' onClick={() => dispatch(closeSignUpModal())} >
                                    <RxCross2 className='text-white text-2xl'></RxCross2>
                                </button>
                            </div>
                            <div className='absolute top-3 inset-x-0 shadow-xl text-white mx-auto -mt-1 rounded-lg rounded-t-none w-9 h-9'>
                                <svg fill='white' viewBox="0 0 24 24" aria-label="X" role="img" className="r-1nao33i r-4qtqp9 r-yyyyoo r-16y2uox r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                            </div>
                            <div className='flex flex-col items-center justify-center mb-3'>
                                <div className='w-1/2 gap-8 flex flex-col'>
                                    <div>
                                        <h1 className='text-white text-3xl font-bold'>Hemen X'e katıl</h1>
                                    </div>
                                    <div className='flex flex-col gap-6'>
                                        <button className='bg-white rounded-3xl flex w-full  justify-center py-2 gap-1' onClick={() => {
                                            googleAuth()
                                        }}>
                                            <FcGoogle className='text-2xl'></FcGoogle><span className='font-semibold'>Google ile kaydolun</span>
                                        </button>
                                        <button className='bg-white rounded-3xl flex w-full  justify-center py-2 gap-1'>
                                            <AiFillApple className='text-2xl'></AiFillApple><span className='font-semibold'>Apple ile kaydol</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center mb-3'>
                                <p className='text-white line flex items-center text-lg'>veya</p>
                            </div>
                            <div className='flex flex-col items-center justify-center mb-6'>
                                <div className='w-1/2 gap-8 flex flex-col'>
                                    <div className='flex flex-col gap-6'>
                                        <button className='bg-white rounded-3xl flex w-full  justify-center py-2 gap-1'
                                            onClick={() => {
                                                dispatch(closeSignUpModal());
                                                dispatch(openRegisterModal());
                                            }}>
                                            <span className='font-semibold'>Hesap oluştur</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col items-center mr-16 mb-4'>
                                    <p className='text-gray w-2/3 text-sm ps-20'>By signing up, you agree to the <span className='text-blue-500'>Terms of Service</span> and <span className='text-blue-500'>Privacy Policy</span>, including <span className='text-blue-500'>Cookie Use</span>.</p>
                                </div>
                                <div className='flex justify-center items-center mr-20 gap-2 ps-9'>
                                    <p className='flex gap-1 text-gray'>Zaten bir hesabın var mı?</p>
                                    <button className='text-blue-500' onClick={() => {
                                        dispatch(closeSignUpModal());
                                        dispatch(openSignInModal());
                                    }}>Giriş Yap</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default SignUp