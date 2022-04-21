import React  from 'react';
import { Outlet } from 'react-router-dom'

import StyledArticles from './Articles.styles';

function Articles() {
    return ( 
        <StyledArticles>
            <h1>Articles</h1>
            <Outlet />
        </StyledArticles>
     );
}

export default Articles;