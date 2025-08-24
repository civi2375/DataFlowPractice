import React, { useState } from 'react'
import type { Song } from '../type'

type Props = {
    setSongs: React.Dispatch<React.SetStateAction<Song[]>>
}

const AddSong = ({setSongs}:Props) => {
  const [newTitle, setNewTitle] = useState('')
  const [newArtist, setNewArtist] = useState('')
  const [newYoutubeUrl, setNewYoutubeUrl] = useState('')
  const [newRating, setNewRating] = useState<number>()
  const handleClick = () =>{
    if(newTitle === '' || newArtist === '' || newYoutubeUrl === '' || newRating === 0)return
    setSongs(prev=>[
      ...prev,
      {
        id: (prev.length + 1).toString(),
        artist: newArtist,
        title: newTitle,
        youtubeUrl: newYoutubeUrl,
        rating: newRating??0,
      }
    ])
    setNewTitle('')
    setNewArtist('')
    setNewYoutubeUrl('')
    setNewRating(0)
  }
  return (
    <div className='w-full lg:max-w-[720px] gap-2 flex flex-col items-center justify-center border-2 border-dashed border-gray-400'>
      <input type="text" placeholder='輸入歌名' value={newTitle} onChange={e=>setNewTitle(e.target.value)} className='w-[120px]'/>
      <input type="text" placeholder='輸入歌手' value={newArtist} onChange={e=>setNewArtist(e.target.value)} className='w-[120px]'/>
      <input type="text" placeholder='輸入歌曲連結' value={newYoutubeUrl} onChange={e=>setNewYoutubeUrl(e.target.value)} className='w-[120px]'/>
      <input type="number" placeholder='輸入評分 1-5' min={1} max={5} value={newRating} onChange={e=>setNewRating(Number(e.target.value))} className='w-[120px]'/>
      <button onClick={handleClick}>新增至排行</button>
    
    </div>
  )
}

export default AddSong