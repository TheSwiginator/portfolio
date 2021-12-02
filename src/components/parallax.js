import React, { useState, useEffect } from 'react';

function Parallax(props) {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
  
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
  
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const myStyle = {
        top: props.top + scrollPosition * props.z,
    }
    return (
        <div style={myStyle} className="absolute w-full transition-all">{props.children}</div>
    );
}

export default Parallax;