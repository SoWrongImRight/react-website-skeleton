import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation  } from 'react-router-dom';

import { ArticleContext } from '../../contexts/articleContext';

import ArticleData from '../../types/article.type';

import StyledSearch from './Search.style';

type Props = {
    clear?: boolean
}

const Search = ( {clear = true}: Props ) => {
    const [selection, setSelection] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setSelection("")
    }, [location])

    const contextData: ArticleData[] | null = useContext(ArticleContext) 

    return ( 
        <StyledSearch>
            <label htmlFor='search-box' style={{ display: "none" }}>Search</label>
            <input id="search-box" value={selection} onChange={(e) => setSelection(e.target.value)} placeholder="Search" />
            {clear && <button onClick={() => setSelection("")}>Clear</button>}
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