import styled from "styled-components";

const StyledSidebar = styled.ul`

    .sidebar {
        height: 70vh;
        float: left;
        width: 200px;
        margin-right: 1rem;
        margin-left: -150px;
        border: 2px solid black;
        transition: margin-left 0.3s ease-in-out;

        li {
            list-style: none;
            padding: 5px 2rem;
            z-index: 10;
            cursor: pointer;
        }
    }

    .open {
        margin-left: 0px !important;
    }

    .sidebar-btn{
        float: right;
        margin: 0.5rem;
        z-index: 10;
    }
`

export default StyledSidebar;