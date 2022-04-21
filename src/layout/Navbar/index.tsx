import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../../components/Search';

import StyledNavbar from './Navbar.styles';

import { navLinks } from '../../data/navData'

function Navbar() {
    return ( 
        <StyledNavbar>
            {navLinks.map(nav => <Link key={nav.name} to={nav.url}><button>{nav.name}</button></Link> )}
            <div className='search-box'>
                <Search clear={false} />
            </div>
        </StyledNavbar>
     );
}

export default Navbar;