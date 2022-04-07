import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from "../../data/navData";

import Search from './Search';

function Navbar() {
    return ( 
        <div>
            {navLinks.map(nav => <Link key={nav.name} to={nav.url}><button>{nav.name}</button></Link> )}
            <Search />
        </div>
     );
}

export default Navbar;