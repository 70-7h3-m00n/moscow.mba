import { useState, useEffect } from 'react';

const useScroll = () => {
    const [windowScroll, setWindowScroll] = useState(
        {
            height: undefined,
            heightBody: undefined,
            heightClient: undefined
        }
    )
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleWindowScroll = () => setWindowScroll((windowScroll) =>
                windowScroll = {
                    height: window.scrollY,
                    heightBody: document.body.clientHeight,
                    heightClient: window.innerHeight
                }
            )
            handleWindowScroll()
            window.addEventListener("scroll", handleWindowScroll);
            return () => window.removeEventListener("scroll", handleWindowScroll);
        }
    }, [])
    return windowScroll
}

export default useScroll