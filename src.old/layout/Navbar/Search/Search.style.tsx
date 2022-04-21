import styled from 'styled-components';

const StyledSearch = styled.div`
    float: right;
    position: relative;

    .results {
        position: absolute;
        z-index: 10;
        background: white;
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