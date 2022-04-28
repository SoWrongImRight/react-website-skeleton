import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation  } from 'react-router-dom';
import { useQuery } from "react-query";

import useDebounce from "../../hooks/useDebounce";

import ArticleData from '../../types/article.type';

import StyledSearch from './Search.style';

type Props = {
    clear?: boolean
}

type Data = {
    id: number,
    title: string,
}

async function fetchPosts() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    if(!response.ok) {
        throw new Error("Netork request failed!")
    }
    return response.json()
}

const Search = ( {clear = true}: Props ) => {
    const [selection, setSelection] = useState("");
    const debouncedSelection = useDebounce(selection, 500)

    const { data, error } = useQuery("posts", fetchPosts)
    if (error) {
        return <p>Search Component Error</p>
    }

    console.log(data)

    return (
        <StyledSearch>
            <label htmlFor='search-box' style={{ display: "none" }}>Search</label>
            <input id="search-box" value={selection} onChange={(e) => setSelection(e.target.value)} placeholder="Search" />
            {selection.length ? 
                <div className="results">
                    {data
                        .filter((data: Data) => data.title.includes(debouncedSelection))
                        .slice(0,5)
                        .map((object: Data) =>
                            <>
                                
                                    <p key={object.id}>{object.title.substring(0,15)}</p>    

                            </>
                    )}
                </div>
                : null
            }
        </StyledSearch>
    )


    // const [selection, setSelection] = useState("");
    // const navigate = useNavigate();
    // const location = useLocation();

    // useEffect(() => {
    //     setSelection("")
    // }, [location])

    // return ( 
    //     <StyledSearch>
    //         <label htmlFor='search-box' style={{ display: "none" }}>Search</label>
    //         <input id="search-box" value={selection} onChange={(e) => setSelection(e.target.value)} placeholder="Search" />
    //         {clear && <button onClick={() => setSelection("")}>Clear</button>}
    //         { selection.length ? 
    //             <div className="results" >
               
    //             </div> 
    //             : null
    //         }
    //     </StyledSearch>
    //  );
}

export default Search;