import React, { useEffect, useState } from 'react'
import type { Video } from '../type';
import { FakeAPI } from '../utils/mockApi';
import VideoComponent from '../component/VideoComponent';

const HomePage = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const videos = await FakeAPI.getVideos();
            setVideos(videos);
        };
        fetchData();
    }, []);
    return (
        <div className='w-full h-full bg-stone-900'>
            <div className=' flex flex-col items-center justify-center gap-5'>
                {videos.map(video => (
                    <VideoComponent key={video.id} video={video} />
                ))}
            </div>
        </div>
    )
}

export default HomePage