import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { Home } from '../pages/halamanRouter/Home'
import { Dashboard } from '../pages/halamanRouter/Dashboard'
import { DetailMovie } from '../pages/DetailMovie'
import { SearchResult } from '../pages/SearchResult'
export const ListRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<HomePage/>}/> */}
      <Route path='/' element={<HomePage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/detail/:id' element={<DetailMovie/>}/>
      <Route path='/searchresult' element={<SearchResult/>}/>
    </Routes>
    </BrowserRouter>
  )
}