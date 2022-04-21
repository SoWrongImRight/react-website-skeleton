import { useState, useEffect } from 'react';

export const useWindowSize = () => {
    interface Window {
        width: number | undefined;
        height: number | undefined;
    }

    const [windowSize, setWindowSize] = useState<Window>({
        width: undefined,
        height: undefined,
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}