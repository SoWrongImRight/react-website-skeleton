import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useQueryClient } from "react-query";

import Spinner from '../../../components/Spinner'

import ArticleData from '../../../types/article.type';

const maxPostPage = 10;

async function fetchPosts(pageNum: number) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=25&_page=${pageNum}`
    );
    if(!response.ok){
        throw new Error('Network response was not ok')
    }
    return response.json();
}

// ReactQuery error type check function
function checkError(error: unknown): error is Error {
    return error instanceof Error;
}

function ArticleList() {
    const [currentPage, setCurrentPage] = useState(1);

    const queryClient = useQueryClient();

    useEffect(() => {
        if (currentPage < maxPostPage) {
            const nextPage = currentPage + 1;
            queryClient.prefetchQuery(["post", nextPage], () => fetchPosts(nextPage))
        }
    }, [currentPage, queryClient])

    const { data, isError, isLoading, error } = useQuery(["posts", currentPage], () => fetchPosts(currentPage), {
        keepPreviousData: true,
    })

    if(isLoading) return <Spinner />
    if(isError) {
        if (checkError(error)) {
            return <p>Error:  {error.message}</p>
        }
    }

    return (
        <>
            <ul>
                {data.map((post: ArticleData) => (
                    <Link key={post.id}  to={`/articles/${post.id}`}>
                        <li >
                            {post.title}
                        </li>
                    </Link>
                ))}
            </ul>
            <span>
                <button 
                    disabled = {currentPage <= 1}
                    onClick={() => setCurrentPage((previousValue) => previousValue - 1)} 
                >Previous</button>
                <span>Current Page: {currentPage}</span>
                <button 
                    onClick={() => {setCurrentPage((previousValue) => previousValue + 1)}}
                >Next</button>
            </span>
        </>
    )
}

export default ArticleList;