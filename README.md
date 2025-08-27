# BillBoard Japan 2024 Top 10 - 資料流練習專案

## 專案簡介

這是一個使用 **React + TypeScript** 製作的日本 Billboard Top 10 歌曲排行榜應用程式。  
用戶可以查看排行榜、修改歌曲評分、點擊星星或輸入數字更新分數，並新增歌曲到排行榜。

---

## 資料流學習心得

### 父組件管理核心 state

- `App.tsx` 統一管理所有歌曲資料 (`songs`)
- 子組件不直接修改 state，只透過父組件傳來的函數更新

### 單向資料流 (Unidirectional Data Flow)

- 父組件把資料傳給子組件 (`SongItem` / `AddSong`)
- 子組件透過 props 回報操作（點星星、輸入分數、新增歌曲）

### 事件回調修改 state

- 使用者操作會呼叫父組件的 `setSongs`，建立新陣列更新 state
- 保持 React 單向資料流的原則

