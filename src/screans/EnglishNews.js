import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import NewsScreen from './NewsScreen';

function EnglishNews() {
    const [articles,setArticles]=useState([]);
    const [keyword,setKeyword]=useState('');

    const fetchData=async(keyword)=>{
        const {data}=await axios.get(`https://gnews.io/api/v4/search?q=${keyword}&country=in&token=31794528b172faa08627769e91e7bf84`)
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
        <form onSubmit={submitHandler}>
            <input onChange={handleChange}/>
            <button >Search</button>
        </form>
        <NewsScreen articles={articles}/>            
        </div>
    )
}

export default EnglishNews
