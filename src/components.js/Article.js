import React,{useState} from 'react'

function Article({article}) {
    const [like,setLike]=useState(false)
    return (
        <div>
        <div className='card'>
                    <img src={article.image} alt='news'/>
                    <a href={article.url} rel="noopener noreferrer"  target="_blank"> <h3>{article.title}</h3></a>
                        
                    
                        <p className='small'>Author name:<i>{article.source.name}</i></p>
                        <p className='small'>Publish Date:{article.publishedAt.substr(0,10)}</p>
                        <div className='flex-display'>
                            <button onClick={(e)=>setLike(true)} className='flex'>{like? 'Liked': 'Like'}</button>
                            <button className='flex'>Hide</button>
                        </div>
                    </div>
            
        </div>
    )
}

export default Article
