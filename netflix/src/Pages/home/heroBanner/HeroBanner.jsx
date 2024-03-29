import React, { useState, useEffect} from 'react'
import "./HeroBanner.scss";
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';



const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const {url}  = useSelector((state)=> state.home);
  const {data , loading} = useFetch("/movie/upcoming");

  useEffect(()=>{
          const bg =url.backdrop + data?.results?.[Math.floor(Math.random()* 20)]?.backdrop_path
          setBackground(bg);
  }, [data])
  const SearchQueryHandler = (event)=>{
        if(event.key === "Enter" && query.length>0){
            navigate(`/search/${query}`);
        }
  }
  return (
    
      <div className="heroBanner">
        {!loading && <div className="backdrop-img">
             <Img src={background} />
        </div>}
  
        <div className="wrapper">
      
        </div>
      </div>
    
  )
}

export default HeroBanner
