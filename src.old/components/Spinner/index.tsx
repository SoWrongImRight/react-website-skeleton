import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
    to{
        transform: rotate(360deg);
    }
`

const Loading = styled.div`
    width: 6rem;
    height: 6rem;
    border: 5px solid #ccc;
    border-radius: 50%;
    border-top-color: #40508d;
    animation: ${spinner} 0.6s linear infinite;
    position: relative;
    margin: 3rem auto;
`

export default Loading;