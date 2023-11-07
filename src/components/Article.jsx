import React from 'react'
import articles from './ArticlesData'
import { useParams } from 'react-router-dom'

export default function Article() {

    const { id } = useParams()
    const article = articles.find(art => art.id == id)
    return (
        <div>
            {article ? <div>
                <img src={article.image} alt="" />
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <h2>Stock : {article.stock}</h2>
            </div> : 'Code article non valide'}



        </div>
    )
}
