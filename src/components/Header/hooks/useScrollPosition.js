import React, { useState, useRef, useEffect } from "react"; 

export default function useScrollPosition (){
    
const isBrowser = typeof window !== `undefined`
const [scrollPosition, setScrollPosition] = useState(0);
const [showBar, setShowBar] = useState(false);
const handleScroll = () => {
    const position = window.scrollY;  
    const shouldBarAnimate = position > 200
    // setScrollPosition(position);
    setShowBar(shouldBarAnimate);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [scrollPosition]);

return {showBar}
}