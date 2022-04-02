import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';

const navLinks = [
    {
        name: "home",
        url: "/"
    },
    {
        name: "about",
        url: "/about"
    },
    {
        name: "articles",
        url: "/articles"
    },
    {
        name: "contact",
        url: "/contact"
    },
]

function Navbar() {
    return ( 
        <div>
            {navLinks.map(nav => <Link key={nav.name} to={nav.url}><button>{nav.name}</button></Link> )}
            <Search />
        </div>
     );
}

export default Navbar;