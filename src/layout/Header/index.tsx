import React from 'react';

interface HeaderProps {
    isSide: boolean,
    toggleSideNav(): void;
    isInfo: boolean,
    toggleInfo(): void;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return ( 
        <div>
            <div>
                <h1>Header</h1>
            </div>
            <div style={{placeContent: 'start end'}}>
                <label style={{margin: '1rem', fontSize: 16}}>
                    Side Nav Menu
                    <input type="checkbox" checked={props.isSide} onChange={props.toggleSideNav} />
                </label>
                <label style={{fontSize: 16}}>
                    Side Info Bar
                    <input type="checkbox" checked={props.isInfo} onChange={props.toggleInfo} />
                </label>
            </div>
        </div>
     );
}

export default React.memo(Header);