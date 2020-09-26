import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Article from '../components.js/Article';




function NewsScreen({articles}) {
    
    console.log('save data',articles )
    return (
        <div>
            <div className='card-container'>
                    {articles.map(article=>
                    (<Article article={article}/>
                    )
                    )}
            </div>
            
        </div>
    )
}

export default NewsScreen
