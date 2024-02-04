import React from 'react'
import { Navigate } from 'react-router-dom'
import LeftSideBar from './LeftSideBar'
import Middle from './Middle'
import RightSideBar from './RightSideBar'
function Home() {
    if (sessionStorage.getItem("token") === null) {
        return <Navigate to={"/"}></Navigate>
    }
    else {
        return (
            <div className='mx-auto flex bg-black w-[calc(65%)]'>
                <div className='w-[calc(20%)] h-screen menu relative'>
                    <LeftSideBar />
                </div>
                <div className='w-[calc(50%)] border-x posts relative'>
                    <Middle />
                </div>
                <div className='w-[calc(30%)] h-screen relative'>
                    <RightSideBar />
                </div>
            </div>
        )
    }
}

export default Home