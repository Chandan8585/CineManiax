import { useState, useEffect } from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.scss';
import { fetchDataFromApi } from './utils/api';
import HomeSlice, { getApiConfiguration } from './Store/homeSlice';
import Home from './Pages/home/Home';
import Details from './Pages/details/Details';
import SearchResult from './Pages/searchResult/SearchResult';
import PageNotFound from './Pages/404/PageNotFound';
import Explore from './Pages/explore/Explore';
import Header from './components/header/Header';

function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state)=> 
  state.home);

  console.log(url);

 useEffect(()=>{
    fetchApiConfig();
 },[]);

   const fetchApiConfig = ()=> {
    fetchDataFromApi("/configuration").then((res)=> {
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + 
        "original",
        poster: res.images.secure_base_url + 
        "original",
        profile: res.images.secure_base_url +
        "original",
      }
      dispatch(getApiConfiguration(url));
    });
   };

  return (
   <BrowserRouter>
   <Header/>
   <Routes>
  
    <Route path='/' element={<Home />}/>
    <Route path="/:mediaType/:id" element={<Details/>} />
    <Route path="/search/:query" element={<SearchResult/>} />
    <Route path="/explore/:mediaType" element={<Explore />} />
    <Route path="*" element={<PageNotFound/>} />
   

   </Routes>
   </BrowserRouter>
  
  );
}

export default App;
