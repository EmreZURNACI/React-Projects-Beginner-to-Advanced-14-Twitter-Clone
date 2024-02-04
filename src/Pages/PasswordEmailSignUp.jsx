import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RxCross2 } from 'react-icons/rx'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { closeRegisterModal, setEmail, setPassword } from '../Features/SignUpSlice'
import { Register } from '../Services/emailSignUpConfig'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
function EmailSignup() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false)
    const registerModal = useSelector((state) => state.SignUpReducer.registerModal)
    const email = useSelector((state) => state.SignUpReducer.email)
    const password = useSelector((state) => state.SignUpReducer.password)
    const register = async () => {
        try {
            const user = await Register(email, password)
            toast.success("Hesabınız başarıyla Oluşturuldu")
            sessionStorage.setItem("token", user.uid)
            navigate("home")
        }
        catch {
            toast.error("Başka mail kullanmaya çalışın")
        }
    }
    return (
        <>
            {registerModal ? (
                <>
                    <div className={`fixed top-0 left-0 bottom-0 w-full h-full flex items-center justify-center ` + (registerModal ? "z-50" : "z-40")}>
                        <div className='bg-black w-1/3 h-2/3 rounded-2xl relative flex flex-col'>
                            <div className='absolute flex justify-start items-center p-2 top-1'>
                                <button className='bg-181919 rounded-full p-1 duration-300 transition-all' onClick={() => dispatch(closeRegisterModal())} >
                                    <RxCross2 className='text-white text-2xl'></RxCross2>
                                </button>
                            </div>
                            <div className='absolute top-3 inset-x-0 shadow-xl text-white mx-auto -mt-1 rounded-lg rounded-t-none w-9 h-9'>
                                <svg fill='white' viewBox="0 0 24 24" aria-label="X" role="img" className="r-1nao33i r-4qtqp9 r-yyyyoo r-16y2uox r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                            </div>
                            <div className='w-2/3 mx-auto flex flex-col gap-8 mt-16'>
                                <div className='flex items-center justify-start mb-3 w-full'>
                                    <h1 className='text-white text-4xl font-bold'>X'e Kaydol</h1>
                                </div>
                                <div className='flex flex-col items-start w-full gap-3 mb-32'>
                                    <div className="relative mb-3 w-full">
                                        <input value={email} onChange={(e) => dispatch(setEmail(e.target.value))}
                                            type="email" name='email' id="email"
                                            className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-xl font-normal leading-tight text-white transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-white focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                                            placeholder="Telefon numarası, e-posta veya kullanıcı adı" />
                                        <label htmlFor="email" className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary text-lg"
                                        >E-posta</label>
                                    </div>
                                    <div className='w-full'>
                                        <div className="relative mb-0 w-full">
                                            <input value={password} onChange={(e) => dispatch(setPassword(e.target.value))}
                                                type={showPassword === false ? "password" : "text"} name='password' id="password"
                                                className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-xl font-normal leading-tight text-white transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-white focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                                                placeholder="Telefon numarası, e-posta veya kullanıcı adı" />
                                            <label htmlFor="password" className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary text-lg"
                                            >Şifre</label>
                                            <div className='absolute top-0 right-0 h-full flex items-center justify-end pe-2'>
                                                <button onClick={() => setShowPassword(!showPassword)}>
                                                    {
                                                        showPassword === false
                                                            ?
                                                            <AiFillEyeInvisible className='text-white text-2xl'></AiFillEyeInvisible>
                                                            :
                                                            <AiFillEye className='text-white text-2xl'></AiFillEye>

                                                    }
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='mb-6'>
                                        <button className='bg-white rounded-3xl flex w-full  justify-center py-3 gap-1'
                                            onClick={() => register()}
                                        >
                                            <span className='font-bold text-xl'>Kaydol</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null
            }
        </>
    )
}

export default EmailSignup