import React from 'react'
import { FaRetweet, FaRegBookmark } from "react-icons/fa6";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import axios from 'axios';
import toast from 'react-hot-toast';
function Post({ postID, userID, postDetail, likes, comments, retweet, views }) {
    const fragmentation = (sayi) => {
        if (sayi >= 100000) {
            return String(sayi).substring(0, 3) + "K";
        }
        else {
            return sayi;
        }
    }
    const likePost = () => {
        const formData = new FormData();
        formData.append("postID", postID)
        console.log("POST ID",postID)
        axios.post("http://localhost/twitter-clone/likePost.php", formData)
            .then((res) => {toast.success(res.data) })
            .catch((e) => { toast.error(e.message) })
    }
    return (
        <div className='border-b border-white'>
            <div className='flex py-2 justify-between'>
                <div className='w-[calc(8%)] flex m-auto'>
                    <img src="" alt="" className='rounded-full w-12 h-12' />
                </div>
                <div className='w-[calc(88%)]'>
                    <p className='text-sm font-semibold mb-2'>@{userID}</p>
                    <p className='text-base mb-2'>{postDetail}</p>
                    <div className='flex items-center justify-between  mx-auto w-full'>
                        <div className='flex items-center justify-center gap-x-2'>
                            <button><FaRegComment className='w-4 h-4 text-gray ' /></button>
                            <span className='text-xs font-semibold'>{fragmentation(comments)}</span>
                        </div>
                        <div className='flex items-center justify-center gap-x-2'>
                            <button><FaRetweet className='w-4 h-4 text-gray' /></button>
                            <span className='text-xs font-semibold'>{fragmentation(retweet)}</span>
                        </div>
                        <div className='flex items-center justify-center gap-x-2'>
                            <button onClick={()=>likePost()}><FaRegHeart className='w-4 h-4 text-gray' /></button>
                            <span className='text-xs font-semibold'>{fragmentation(likes)}</span>
                        </div>
                        <div className='flex items-center justify-center gap-x-2'>
                            <button><IoIosStats className='w-4 h-4 text-gray' /></button>
                            <span className='text-xs font-semibold'>{fragmentation(views)}</span>
                        </div>
                        <div className='flex gap-x-2 items-center justify-center'>
                            <div className='flex items-center justify-center gap-x-2'>
                                <button><FaRegBookmark className='w-4 h-4 text-gray' /></button>
                            </div>
                            <div className='flex items-center justify-center gap-x-2'>
                                <button><IoShareOutline className='w-4 h-4 text-gray' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post