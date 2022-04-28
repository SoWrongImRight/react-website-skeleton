import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useQueryClient } from "react-query";

import Spinner from '../../../components/Spinner'

import ArticleData from '../../../types/article.type';

const maxPostPage = 10;

async function fetchPosts(pageNum: number) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
    );
    return response.json();
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
        staleTime: 2000,
        keepPreviousData: true,
    })

    if(isLoading) return <Spinner />
    if(isError) return <><div>Error loading article data</div></>

    return (
        <ul>
            {data.map((post: ArticleData) => (
                <Link to={`/articles/${post.id}`}>
                    <li key={post.id} >
                        {post.title}
                    </li>
                </Link>
            ))}
        </ul>
    )
}

export default ArticleList;