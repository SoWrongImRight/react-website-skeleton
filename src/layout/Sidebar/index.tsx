import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

// Import Styles
import StyledSidebar from "./Sidebar.style";

import { navLinks } from "../../data/navData";

function Sidebar() {
  const [isOpen, setIsOpen ] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledSidebar>
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <button className="sidebar-btn" onClick={handleClick}>{isOpen ? "Close" : "Open"}</button>
          <br />
          {navLinks.map((nav) => <li key={nav.name} onClick={() => navigate(`${nav.url}`)}>{nav.name}</li>)}
        </div>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;