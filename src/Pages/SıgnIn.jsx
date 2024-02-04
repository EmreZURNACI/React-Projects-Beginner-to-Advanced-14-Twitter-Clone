import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from "uuid";
import { RxCross2 } from 'react-icons/rx'
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'
import { closeSignInModal, openPasswordModal, setEmail } from '../Features/SignInSlice'
import { openSignUpModal } from '../Features/SignUpSlice'
import { auth, provider } from '../Services/config'
import { signInWithPopup } from 'firebase/auth'
function SıgnIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signInModal = useSelector((state) => state.SignInReducer.show)
    const email = useSelector((state) => state.SignInReducer.email)
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
            {signInModal ? (
                <>
                    <div className={`fixed top-0 left-0 bottom-0 w-full h-full flex items-center justify-center ` + (signInModal ? "z-50" : "z-40")}>
                        <div className='bg-black w-1/3 h-2/3 rounded-2xl relative flex flex-col justify-center'>
                            <div className='absolute flex justify-start items-center p-2 top-1'>
                                <button className='bg-181919 rounded-full p-1 duration-300 transition-all' onClick={() => dispatch(closeSignInModal())} >
                                    <RxCross2 className='text-white text-2xl'></RxCross2>
                                </button>
                            </div>
                            <div className='absolute top-3 inset-x-0 shadow-xl text-white mx-auto -mt-1 rounded-lg rounded-t-none w-9 h-9'>
                                <svg fill='white' viewBox="0 0 24 24" aria-label="X" role="img" className="r-1nao33i r-4qtqp9 r-yyyyoo r-16y2uox r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                            </div>
                            <div className='flex flex-col items-center justify-center mb-3'>
                                <div className='w-1/2 gap-8 flex flex-col'>
                                    <div>
                                        <h1 className='text-white text-3xl font-bold'>X'e giriş yap</h1>
                                    </div>
                                    <div className='flex flex-col gap-6'>
                                        <button className='bg-white rounded-3xl flex w-full  justify-center py-2 gap-1' onClick={() => googleAuth()}>
                                            <FcGoogle className='text-2xl'></FcGoogle><span className='font-semibold'>Google ile giriş yap</span>
                                        </button>
                                        <button className='bg-white rounded-3xl flex w-full  justify-center py-2 gap-1'>
                                            <AiFillApple className='text-2xl'></AiFillApple><span className='font-semibold'>Apple ile giriş yap</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center mb-3'>
                                <p className='text-white line flex items-center text-lg'>veya</p>
                            </div>
                            <div className='flex flex-col items-center justify-center mb-3'>
                                <div className="relative mb-3 w-1/2">
                                    <input value={email} onChange={(e) => dispatch(setEmail(e.target.value))}
                                        type="email" name='email' id="email"
                                        className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-white transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-white focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                                        placeholder="Telefon numarası, e-posta veya kullanıcı adı" autoComplete='off' />
                                    <label htmlFor="email" className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary text-xs"
                                    >Telefon numarası , e-posta veya kullanıcı adı</label>
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center mb-6'>
                                <div className='w-1/2 gap-8 flex flex-col'>
                                    <div className='flex flex-col gap-6'>
                                        <button className='bg-white rounded-3xl flex w-full  justify-center py-2 gap-1'
                                            onClick={() => {
                                                if (email !== "" && String(email).includes("@")) {
                                                    dispatch(closeSignInModal());
                                                    dispatch(openPasswordModal());
                                                }
                                                else {
                                                    alert("Geçerli e-mail adresi giriniz")
                                                }
                                            }}>
                                            <span className='font-semibold'>İleri</span>
                                        </button>
                                        <button className='bg-black text-white rounded-3xl flex w-full  justify-center py-2 gap-1 border-white border'>
                                            <span className='font-semibold'>Şifreni mi unuttun?</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center mr-16'>
                                <p className='flex gap-1 text-gray'>Henüz bir hesabın yok mu?</p>
                                <button className='text-blue-500'
                                    onClick={() => {
                                        dispatch(closeSignInModal());
                                        dispatch(openSignUpModal())
                                    }}>Kaydol</button>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default SıgnIn