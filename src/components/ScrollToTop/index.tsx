import React, { useState } from 'react';

import {FaArrowCircleUp} from 'react-icons/fa';

import StyledScrollToTop from './ScrollToTop.styles';

const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300){
            setVisible(false);
        }

        
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <StyledScrollToTop>
            <FaArrowCircleUp onClick={scrollToTop}
                style={{display: visible ? 'inline' : 'none'}} />
        </StyledScrollToTop>
    )
}

export default ScrollToTop;