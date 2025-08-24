import { useState } from 'react'
import './App.css'

import SongItem from './component/SongItem';
import type { Song } from './type';
import AddSong from './component/Addsong';

const fakeSongs: Song[] = [
  {
    id: '1',
    artist: 'Creepy Nuts',
    title: 'Bling-Bang-Bang-Born',
    youtubeUrl: 'https://www.youtube.com/embed/mLW35YMzELE',
    rating: 4.8,
  },
  {
    id: '2',
    artist: 'tuki.',
    title: '晚餐歌',
    youtubeUrl: 'https://www.youtube.com/embed/oZpYEEcvu5I',
    rating: 4.7,
  },
  {
    id: '3',
    artist: 'Omoinotake',
    title: '幾億光年',
    youtubeUrl: 'https://www.youtube.com/embed/P7bVX6fJfCg',
    rating: 4.6,
  },
  {
    id: '4',
    artist: 'YOASOBI',
    title: '偶像',
    youtubeUrl: 'https://www.youtube.com/embed/ZRtdQ81jPUQ',
    rating: 4.9,
  },
  {
    id: '5',
    artist: 'Mrs. GREEN APPLE',
    title: '紫丁香',
    youtubeUrl: 'https://www.youtube.com/embed/QjrkrVmC-8M',
    rating: 4.5,
  },
  {
    id: '6',
    artist: 'Mrs. GREEN APPLE',
    title: '順其自然',
    youtubeUrl: 'https://www.youtube.com/embed/Jy-QS27q7lA',
    rating: 4.4,
  },
  {
    id: '7',
    artist: 'Ado',
    title: '唱',
    youtubeUrl: 'https://www.youtube.com/embed/pgXpM4l_MwI',
    rating: 4.3,
  },
  {
    id: '8',
    artist: 'Vaundy',
    title: '怪獸的花歌',
    youtubeUrl: 'https://www.youtube.com/embed/UM9XNpgrqVk',
    rating: 4.2,
  },
  {
    id: '9',
    artist: 'Mrs. GREEN APPLE',
    title: '青與夏',
    youtubeUrl: 'https://www.youtube.com/embed/m34DPnRUfMU',
    rating: 4.1,
  },
  {
    id: '10',
    artist: 'Mrs. GREEN APPLE',
    title: 'Dancehall',
    youtubeUrl: 'https://www.youtube.com/embed/x2rvSf0STBM',
    rating: 5.0,
  },
];


const App = () => {
  const [songs,setSongs] = useState<Song[]>(fakeSongs);
  return (
    <div className="w-full h-full bg-gray-200 p-4 space-y-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline">Welcome to the BillBoard Japan 2024 Top 10</h1>
      <AddSong setSongs={setSongs} />
      {songs.map((song:Song)=>{
        return <SongItem key={song.id} song={song} setSongs={setSongs} />
      },[])}

    </div>
  )
}

export default App

