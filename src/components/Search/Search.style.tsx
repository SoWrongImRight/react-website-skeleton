import styled from 'styled-components';

const StyledSearch = styled.div`
    /* float: right; */
    position: relative;

    input {
        width: 90%;
    }

    .results {
        position: absolute;
        z-index: 150;
        background-color: white;
        border: 1px solid black;
        cursor: pointer;

        p {
            &:hover {
                background: blue;
                color: white;
            }
        }
    }
`

export default StyledSearch;