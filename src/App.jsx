import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApiconfig } from './store/slice/HomeSlice'
import { fetchDataFromApi } from './utils/api'
//imports

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import PageNotfound from './pages/404/PageNotfound'
import Detail from './pages/Detail/Detail'
import Explore from './pages/Explore/Explore'
import Home from './pages/Home/Home'
import SearchResult from './pages/SearchResult/SearchResult'


import { BrowserRouter,Route,Routes } from 'react-router-dom'
const App = () => {
  const dispatch = useDispatch()
  const { url } = useSelector(state => state.home)


  useEffect(() => {
    const FetchApiConfig = () => {
      fetchDataFromApi('/configuration').then(res => {
        console.log(res);
        const url={
          backdrop:res.images.secure_base_url + "original",
          poster:res.images.secure_base_url + "original",
          profile:res.images.secure_base_url + "original",

        }
        dispatch(getApiconfig(url))
      })
    }

    FetchApiConfig()
  }, [dispatch])
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Detail />} />
        <Route path="search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path='*' element={<PageNotfound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
