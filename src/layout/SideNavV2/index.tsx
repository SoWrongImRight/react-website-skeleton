import React from 'react';
import { useNavigate } from 'react-router-dom';

import Search from '../../components/Search';

import StyledSideNavV2 from './SideNavV2.styles';

import { navLinks } from '../../data/navData';

function SideNavV2() {
    const navigate = useNavigate();

    return ( 
        <StyledSideNavV2>
            <div className="search-div">
                <Search clear={false} />
            </div>
            <ul>
                {navLinks.map(nav => <li key={nav.name} onClick={() => navigate(`${nav.url}`)}>{nav.name}</li>)}
            </ul>
        </StyledSideNavV2>
     );
}

export default React.memo(SideNavV2);