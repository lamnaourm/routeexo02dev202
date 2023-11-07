import React from 'react'
import articles from './ArticlesData'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate('/article/' + id)
    }
    return (
        <div className='list'>
            {articles.map(article =>
                <div className='article'>
                    <img src={article.image} alt={article.title} />
                    <h3>{article.title}</h3>
                    <button onClick={() => handleClick(article.id)}>Details article</button>
                </div>
            )}
        </div>
    )
}
