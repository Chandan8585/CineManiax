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

function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state)=> 
  state.home);

  console.log(url);

 useEffect(()=>{
    apiTesting();
 },[])

   const apiTesting = ()=> {
    fetchDataFromApi("/movie/popular").then((res)=> {
      console.log(res);
      dispatch(getApiConfiguration(
        res));
    });
   };

  return (
   <BrowserRouter>
   <Routes>
  
    <Route path='/' element={<Home />}/>
    <Route path="/:mediaType/:id" element={<Details/>} />
    <Route path="/search/:query" element={<SearchResult/>} />
    <Route path="/explore/:mediaType" element={<Explore  />} />
    <Route path="*" element={<PageNotFound/>} />
   

   </Routes>
   </BrowserRouter>
  
  );
}

export default App;
