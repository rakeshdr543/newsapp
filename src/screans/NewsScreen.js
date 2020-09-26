import React from 'react'

function NewsScreen({articles}) {
    return (
        <div>
            <div>
                    {articles.map(article=>
                    (<div>
                        <h3>{article.title}</h3>
                    
                        <h3>{article.content}</h3>
                        <h3>{article.publishedAt}</h3>
                        <div>
                            <button>Like</button>
                            <button>Hide</button>
                        </div>
                    </div>
                    )
                    )}
            </div>
            
        </div>
    )
}

export default NewsScreen
