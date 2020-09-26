import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import NewsScreen from './NewsScreen';

function UsaNews() {
     
    const [articles,setArticles]=useState([]);
    const [keyword,setKeyword]=useState('');

    const fetchData=async(keyword)=>{
        const {data}=await Axios.get(`https://gnews.io/api/v4/search?q=${keyword}&country=us&token=31794528b172faa08627769e91e7bf84`)
        const item=data.articles;
        setArticles(item)

    }
    useEffect(() => {
        fetchData('None')     
    }, [])

    const handleChange=(e)=>{
        setKeyword(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        fetchData(keyword)
    }

    return (
        <div>
         <div className='prev'>
         <Link to ='/'>
         Previous Page
         </Link>
            
         </div>
         <div className='next'>
         <Link to ='/uk'>
         Next Page
         </Link>
            
         </div>
        <div className='search' >
        <form onSubmit={submitHandler}>
             <input onChange={handleChange}/>
            <button type='submit' >Search</button>
         </form>
        </div>
         
        
        <NewsScreen articles={articles}/>            
        </div>
    )
}


export default UsaNews
