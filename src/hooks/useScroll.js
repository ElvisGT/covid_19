import { useEffect, useState } from 'react';

export const useScroll = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(document.documentElement.scrollTop);
        })
    }, [])

    return { scroll };
};