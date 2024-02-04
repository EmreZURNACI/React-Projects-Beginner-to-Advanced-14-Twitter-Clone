import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Post from './Post'
function Middle() {
    const [postDetail, setPostDetail] = useState("")
    const [posts, setPosts] = useState([])
    const refPostDetail = useRef()
    const addPost = (e) => {
        e.preventDefault()
        if ((typeof postDetail === "string" && postDetail.length !== 0) && (postDetail !== null)) {
            const formData = new FormData();
            formData.append("uid", sessionStorage.getItem("token"));
            formData.append("postDetail", postDetail);
            axios.post("http://localhost/twitter-clone/addPost.php", formData)
                .then((res) => toast.success(res.data))
                .catch((err) => toast.error(err))
        }
    }
    const getPosts = () => {
        axios.get("http://localhost/twitter-clone/getAllPosts.php")
            .then((res) => {setPosts(res.data)})
            .catch((err) => toast.error(err))
    }
    useEffect(() => {
        getPosts()
    }, [posts])
    return (
        <div>
            <Toaster position='top right' />
            <div className='w-100 bg-black flex border-b fixed top-0 w-[calc(32.4%)] kisisellestir'>
                <div className='border-r border-white flex items-end justify-center w-1/2 h-10  py-2 cursor-pointer font-semibold text-base'>
                    <p className='text-white'> Sana Özel</p>
                </div>
                <div className=' flex items-end justify-center w-1/2 h-10  py-2 cursor-pointer font-semibold text-base'>
                    <p className='text-white'>  Takip edilenler</p>
                </div>
            </div>
            <div className='mt-10'>
                <div className='border-b border-white'>
                    <form method='POST' onSubmit={(e) => addPost(e)} name='addPost' id='addPost' autoComplete='off'>
                        <div>
                            <div className='flex py-2 justify-between'>
                                <div className='w-[calc(8%)] flex m-auto'>
                                    <img src="" alt="" className='rounded-full w-12 h-12' />
                                </div>
                                <div className='w-[calc(88%)]'>
                                    <input type='text' name="postDetail" id="postDetail" placeholder='Neler Oluyor ?' className='outline-none bg-transparent text-gray w-full h-full resize-none font-semibold text-base ps-1' ref={refPostDetail} value={postDetail} onChange={(e) => setPostDetail(e.target.value)} autoComplete='off' autoCorrect='off'>
                                    </input>
                                </div>
                            </div>
                            <div className='flex justify-end items-end p-1'>
                                <button type='submit' name='submitPost' id='submitPost' className='inline-block py-1 px-4 rounded-3xl bg-blue-500 text-white'>Gönder</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <ul>
                        {
                            Array.from(posts) !== 0 && posts !== null &&
                            posts.map((item, index) => (
                                <li className='border-b border-white text-white' key={index}>
                                    <Post
                                        postID={item.postID}
                                        userID={item.userID}
                                        postDetail={item.postDescription}
                                        likes={item.likes}
                                        comments={item.comments}
                                        retweet={item.retweet}
                                        views={item.views} />
                                </li>
                            ))

                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Middle)