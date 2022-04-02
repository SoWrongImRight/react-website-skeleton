import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-Markdown';

import GoBack from './GoBack';

import { ArticleContext } from '../../../contexts/articleContext';

import ArticleData from '../../../types/article.type';

function Article() {
    const {id} = useParams();

    const contextData: ArticleData[] | null = useContext(ArticleContext) 

    const post = contextData!.find(data => data.id === parseInt(id!))

    console.log(post)

    return ( 
        <div>
            <h1>{post!.title}</h1>
            <p>{post!.body}</p>
            <GoBack />
        </div>
     );
}

export default Article;