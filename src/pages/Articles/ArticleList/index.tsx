import React, { useContext, useState, Suspense } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../../../components/Spinner'

import { ArticleContext } from '../../../contexts/articleContext';

import ArticleData from '../../../types/article.type';

function ArticleList() {
    const [qty, setQty] = useState(5)
    const [isDisabled, setIsDisabled] = useState(false)
    const contextData: ArticleData[] | null = useContext(ArticleContext) 

    console.log(contextData!.length)

    const loadMore = () => {
        setQty((prevState) => prevState + 5)
        if (qty >= contextData!.length) {
            setIsDisabled(true)
        }
    }

    return ( 
        <div>
            <h1>
                Article List
            </h1>
            <Suspense fallback={<Spinner />}>
                { contextData ? contextData.slice(0, qty).map((article) => <h2 key={article.id}><Link to={`/articles/${article.id}`} >{article.title}</Link></h2>) : <h2>No Articles Found</h2>}
            </Suspense>
            <button disabled={isDisabled} onClick={loadMore}>Load More</button>
            {isDisabled && <p>No additional articles found</p>}
        </div>
     );
}

export default ArticleList;