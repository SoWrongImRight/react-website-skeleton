import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ArticleContext } from '../../../contexts/articleContext';

import ArticleData from '../../../types/article.type';

import StyledSearch from './Search.style';

function Search() {
    const [selection, setSelection] = useState("");
    const navigate = useNavigate();

    const contextData: ArticleData[] | null = useContext(ArticleContext) 

    return ( 
        <StyledSearch>
            <label htmlFor='search-box' style={{ display: "none" }}>Search</label>
            <input id="search-box" value={selection} onChange={(e) => setSelection(e.target.value)} placeholder="Search" />
            <button onClick={() => setSelection("")}>Clear</button><br />
            { selection.length ? 
                <div className="results" >
                    { contextData?.filter(data => data.title.includes(selection) || data.body.includes(selection)).slice(0,5).map(data => <p key={data.id} onClick={() => navigate(`/articles/${data.id}`)}>{data.title.substring(0,15)}</p>)}
                </div> 
                : null
            }
        </StyledSearch>
     );
}

export default Search;