import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
function LeftSideBar() {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col fixed top-0 bottom-0'>
            <ul className='m-0 p-0 flex flex-col justify-center items-start gap-y-2'>
                <li className='flex gap-3 text-white px-4 py-1.5 rounded-3xl cursor-pointer duration-150'>
                    <div className='flex items-center justify-center'>
                        <svg fill='white' viewBox="0 0 24 24" aria-label="X" role="img" className='w-9 h-9'><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
                        </svg>
                    </div>
                </li>
                <li className='flex gap-3 text-white px-4 py-1.5 rounded-3xl cursor-pointer duration-150'>
                    <div className='flex items-center justify-center'>
                        <svg fill='white' viewBox="0 0 24 24" className='w-7 h-7' aria-hidden="true">
                            <g>
                                <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z">
                                </path>
                            </g>
                        </svg>
                    </div>
                    <div>
                        <p className='font-bold text-xl'>Anasayfa</p>
                    </div>
                </li>
                <li className='flex gap-3 text-white px-4 py-1.5 rounded-3xl cursor-pointer duration-150'>
                    <div className='flex items-center justify-center'>
                        <svg fill='white' viewBox="0 0 24 24" className='w-7 h-7 ' aria-hidden="true"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
                    </div>
                    <div>
                        <p className='font-bold text-xl'>Keşfet</p>
                    </div>
                </li>
                <li className='flex gap-3 text-white px-4 py-1.5 rounded-3xl cursor-pointer duration-150'>
                    <div className='flex items-center justify-center'>
                        <svg fill='white' viewBox="0 0 24 24" className='w-7 h-7 ' aria-hidden="true"><g><path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path></g></svg>
                    </div>
                    <div>
                        <p className='font-bold text-xl'>Bildirimler</p>
                    </div>
                </li>
                <li className='flex gap-3 text-white px-4 py-1.5 rounded-3xl cursor-pointer duration-150'>
                    <div className='flex items-center justify-center'>
                        <svg fill='white' viewBox="0 0 24 24" aria-hidden="true" className=' w-7 h-7'><g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path></g></svg>
                    </div>
                    <div>
                        <p className='font-bold text-xl'>Mesajlar</p>
                    </div>
                </li>
                <li className='flex gap-3 text-white px-4 py-1.5 rounded-3xl cursor-pointer duration-150'>
                    <div className='flex items-center justify-center'>
                        <svg fill='white' viewBox="0 0 24 24" aria-hidden="true" className='w-7 h-7 '><g><path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path></g></svg>
                    </div>
                    <div>
                        <p className='font-bold text-xl'>Listeler</p>
                    </div>
                </li>
                <li className='flex gap-3 text-white px-4 py-1.5 rounded-3xl cursor-pointer duration-150'>
                    <div className='flex items-center justify-center'>
                        <svg fill='white' viewBox="0 0 24 24" aria-hidden="true" className='w-7 h-7 '><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg>
                    </div>
                    <div>
                        <p className='font-bold text-xl'>Yer işaretleri</p>
                    </div>
                </li>
                <li className='flex gap-3 text-white px-4 py-1.5 rounded-3xl cursor-pointer duration-150'>
                    <div className='flex items-center justify-center'>
                        <svg fill='white' viewBox="0 0 24 24" className='w-7 h-7 ' aria-hidden="true"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                    </div>
                    <div>
                        <p className='font-bold text-xl'>Premium</p>
                    </div>
                </li>
                <li className='flex gap-3 text-white px-4 py-1.5 rounded-3xl cursor-pointer duration-150'>
                    <div className='flex items-center justify-center'>
                        <svg fill='white' viewBox="0 0 24 24" aria-hidden="true" className='w-7 h-7 '><g><path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path></g></svg>
                    </div>
                    <div>
                        <p className='font-bold text-xl'>Profil</p>
                    </div>
                </li>
                <li className='flex gap-3 text-white px-4 py-1.5 rounded-3xl cursor-pointer duration-150'>
                    <div className='flex items-center justify-center'>
                        <svg fill='white' viewBox="0 0 24 24" aria-hidden="true" className='w-7 h-7 '><g><path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path></g></svg>
                    </div>
                    <div>
                        <p className='font-bold text-xl'>Daha fazla</p>
                    </div>
                </li>
                <li className='flex gap-3 text-white px-4 py-1.5 rounded-3xl cursor-pointer duration-150'
                    onClick={() => {
                        sessionStorage.removeItem("token");
                        navigate("/")
                    }}>
                    <div className='flex items-center justify-center'>
                        <IoIosLogOut className='w-7 h-7' />
                    </div>
                    <div>
                        <p className='font-bold text-xl'>Çıkış yap</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default LeftSideBar