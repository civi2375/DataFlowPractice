import React, { useEffect, useState } from 'react'
import type { Channel, Video } from '../type'
import { FakeAPI } from '../utils/mockApi';
import { useNavigate } from 'react-router-dom';

const VideoComponent = ({video}:{video:Video}) => {
    const [channel, setChannel] = useState<Channel | null>(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchChannel = async () => {
            const channelData = await FakeAPI.getChannelById(video.channelId);
            if(channelData)setChannel(channelData);
        };
        fetchChannel();
    }, [video.channelId]);
    return (
        <div className='flex-row flex gap-4 bg-stone-900 my-3 w-[720px] h-[240px] cursor-pointer' onClick={()=>navigate(`video/${video.id}`)}>
            <iframe src={video.url} width={330} height={240}></iframe>
            <div className='flex flex-col gap-2 max-w-[360px] w-fit'>
            <h1 className='text-white font-semibold text-2xl'>{video.title}</h1>
            <p className='text-gray-300 text-sm'>觀看次數: {video.view_count}</p>
            <div className='flex-row flex gap-2 items-center'>
                <img src={channel?.avater} alt="" width={40} height={40} className='rounded-full' />
                <p className='text-gray-300 text-sm'>{channel?.name}</p>
                {channel?.state==='active'&&<span className='text-sm py-1 px-3 rounded-full bg-gray-300'>官方頻道</span>}
            </div>
            <p className='text-gray-300 text-sm'>{video.introducion}</p>
            </div>
        </div>
    )
}

export default VideoComponent