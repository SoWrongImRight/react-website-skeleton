import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

// Import Types
import ArticleData from '../types/article.type';

export const ArticleContext = createContext<ArticleData[] | null>([]);

export const ArticleProvider = (props: any) => {
    const [articleProviderData, setArticleProviderData] = useState<ArticleData[] | null >(null);

    async function getArticles() {
        try {
            const { data, status } = await axios.get<ArticleData[]>('https://jsonplaceholder.typicode.com/posts?_limit=25');

            setArticleProviderData(data)
        } catch(error) {
            if (axios.isAxiosError(error)) {
                console.log(`Error message: ${axios.isAxiosError(error)}`)
                return error.message
            } else {
                return "An unexpected error occurred"
            }
        }

    }
    useEffect(() => {
        getArticles()
    }, [])

    return (
        <ArticleContext.Provider value={articleProviderData} >
            {props.children}
        </ArticleContext.Provider>
    )
}