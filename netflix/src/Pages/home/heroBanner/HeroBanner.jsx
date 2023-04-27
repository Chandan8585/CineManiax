import React, { useState, useEffect} from 'react'
import "./HeroBanner.scss";
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const {data , loading} = useFetch("/movie/upcoming");

  useEffect(()=>{
          const bg = data?.results?.[Math.floor(Math.random()* 20)]?.backdrop_path
          setBackground(bg);
  }, [data])
  const SearchQueryHandler = (event)=>{
        if(event.key === "Enter" && query.length>0){
            navigate(`/search/${query}`);
        }
  }
  return (
    
      <div className="heroBanner">
        <div className="wrapper">
          <div className="heroBannerContent">
            <span className="title"></span>
            <span className="subTitle">
              Millions of movies, TV shows and people
              to discover,
              Expolore now.
            </span>
            <div className="searchInput">
              <input type="text"
              placeholder='Search for a movie or tv show...'
              onKeyUp={SearchQueryHandler}
              onChange={(e)=> setQuery(e.target.value)}
              />
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default HeroBanner
