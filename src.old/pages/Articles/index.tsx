import React  from 'react';
import { Outlet } from 'react-router-dom'

function Articles() {
    return ( 
        <div>
            <h1>Articles</h1>
            <Outlet />
        </div>
     );
}

export default Articles;