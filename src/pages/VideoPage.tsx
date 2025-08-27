import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FakeAPI } from '../utils/mockApi';
import type { Channel, comment, User, Video } from '../type';

const VideoPage = () => {
    const { id } = useParams(); // 從 URL 拿到 name
    const [video, setvideo] = useState<Video>()
    const [channel, setchannel] = useState<Channel>()
    const [comment,setcomment] = useState<comment[]>()
    useEffect(()=>{
        const fetchData = async()=>{
            const videoData = await FakeAPI.getVideoById(id!)
            if(videoData){
                const channelData = await FakeAPI.getChannelById(videoData?.channelId || 'c1')
                const commentData = await FakeAPI.getCommentsByVideoId(videoData.id)
                setvideo(videoData)
                setchannel(channelData)
                setcomment(commentData)
            }
        }
        fetchData()
    }, [id])
    return (
        <div className='w-full h-full bg-stone-900 flex flex-col items-center justify-start pt-5 gap-5'>
            <iframe src={video?.url} width={window.innerWidth-60} height={480}></iframe>
            <div className='flex flex-col gap-2 max-w-[720px] w-fit'>
            <h1 className='text-white font-semibold text-2xl'>{video?.title}</h1>
            <p className='text-gray-300 text-sm'>觀看次數: {video?.view_count}</p>

            <div className='flex-row flex justify-between'>
                <div className='flex-row flex gap-2 items-center'>
                    <img src={channel?.avater} alt="" width={40} height={40} className='rounded-full' />
                    <p className='text-gray-300 text-sm'>{channel?.name}</p>
                    {channel?.state==='active'&&<span className='text-sm py-1 px-3 rounded-full bg-gray-300'>官方頻道</span>}
                </div>
                <button className='text-gray-300 bg-stone-500 py-2 px-6 rounded-full'>
                    按讚 {video?.like_count}
                </button>
            </div>
            <p className='text-gray-300 text-sm'>{video?.introducion}</p>
            </div>
            <div className='items-center w-[720px]'>
               {comment?.map((c)=>{
                   return<CommentBlock key={c.comment_id} comment={c}/>
               })} 
            </div>
        </div>
    )
}

function CommentBlock({comment}: {comment: comment}){
    const [user,setuser] = useState<User>()
    useEffect(()=>{
        const fetchData = async()=>{
            const userData = await FakeAPI.getUserById(comment.user_id)
            if(userData){
                setuser(userData)
            }
        }
        fetchData()
    }, [comment.user_id])
    return (
        <div className='flex-row flex gap-2 my-4 w-full items-center justify-start'>
            <img src={user?.avater} alt="" width={60} height={60} className='rounded-full' />
            <div className='flex flex-col gap-2'>
                <p className='text-gray-300 text-sm font-semibold'>{user?.name}</p>
                <p className='text-gray-300 text-sm'>{comment.comment_content}</p>
            </div>
        </div>
    )
}

export default VideoPage