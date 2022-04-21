import React, { useState, Suspense } from 'react';

// Import Layout components
import Header from './Header';
import Navbar from './Navbar';
import SideNavV2 from './SideNavV2';
import SideInfo from './SideInfo';
import Footer from './Footer';

import StyledLayout from './Layout.styles';

// Lazy load
const Banner = React.lazy(() => import('./Banner'));
const ScrollToTop = React.lazy(() => import('../components/ScrollToTop'));

const Layout: React.FC = ({children}) => {
    const [isBanner, setIsBanner] = useState(false);
    const [isSide, setIsSide] = useState(true);

    const [isInfo, setIsInfo] = useState(false)

    const toggleSideNav = () => {
        setIsSide(!isSide)
    }

    const toggleInfo = () => {
        setIsInfo(!isInfo)
    }

    return ( 
        <StyledLayout>
            <Suspense fallback={null}>
                {isBanner && <Banner />}
                <Header isSide={isSide} toggleSideNav={toggleSideNav} isInfo={isInfo} toggleInfo={toggleInfo} />
                {isSide ? <SideNavV2 /> : <Navbar />}
                {isInfo && <SideInfo />}
                <main>
                    {children}
                </main>
                <ScrollToTop />
                <Footer />
            </Suspense>
        </StyledLayout>
     );
}

export default Layout;