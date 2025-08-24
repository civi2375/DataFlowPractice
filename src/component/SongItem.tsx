import { useState } from 'react';
import type { Song } from '../type'
import { CiStar } from 'react-icons/ci';

type Props = {
    song: Song,
    setSongs: React.Dispatch<React.SetStateAction<Song[]>>
}

const SongItem = ({song, setSongs}: Props) => {
  const handleRating = (value: number) => {
    setSongs(prev =>
      prev.map(s =>
        s.id === song.id ? { ...s, rating: value } : s
      )
    );
  }
  return (
    <div className='w-full lg:max-w-[720px] h-full flex flex-row items-center justify-around p-4 bg-blue-100 rounded-2xl border hover:bg-gray-300'>
        <div className='w-[80px] h-full '>
            <p className='text-4xl'>{song.id}</p>
        </div>
        <iframe src={song.youtubeUrl} title={song.title} width={300}></iframe>
        <div className='flex flex-col items-start justify-center lg:w-[240px]'>
            <p>歌名:{song.title}</p>
            <p>作者:{song.artist}</p>
            <p>評分:{song.rating}</p>
            <div className='flex'>
            {[1,2,3,4,5].map(i => (
              <CiStar
                key={i}
                size={24}
                className={`cursor-pointer ${i <= Math.round(song.rating) ? 'text-yellow-900' : 'text-gray-400'}`}
                onClick={() => handleRating(i)}
              />
            ))}
          </div>
        </div>              
    </div>
  )
}

export default SongItem