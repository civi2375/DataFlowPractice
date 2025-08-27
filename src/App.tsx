import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VideoPage from './pages/VideoPage';


const App = () => {
  return (
    <div className='flex flex-col w-full h-full min-h-screen items-center justify-start bg-stone-900 '>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video/:id" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );

}

export default App