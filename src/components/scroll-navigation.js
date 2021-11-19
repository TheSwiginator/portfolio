import React, { useState, useEffect } from 'react';

function NavButton({name, href, offset, length}) {
    const [myOffset, setMyOffset] = useState(0);
    const [myLength, setMyLength] = useState(0);

    const handleMouseOver = () => {
        offset[1](myOffset);
        length[1](myLength);
    };

    return (
        <div ref={el => {
            if (!el) {return};
            setMyOffset(el.getBoundingClientRect().left);
            setMyLength(el.getBoundingClientRect().width);
        }} 
        onMouseOver={() => handleMouseOver()}
        className=" w-auto h-full flex justify-center items-center font-PublicSans text-gray-600 text-sm pl-5 pr-5 z-[60]">{name}</div>
    );
}

function ScrollNav({btns}) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [offset, setOffset] = useState(0);
    const [length, setLength] = useState(0);
    const [vis, setVis] = useState(0);

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
        opacity: (scrollPosition < 200) ? (scrollPosition / 200) : 1,
        visiblity: (scrollPosition < 200) ? "hidden" : "visible",
    }

    const highlightStyle = {
        left: offset - 16,
        width: length,
        opacity: vis,
    }
  
    const buttonList = btns.map((btn) => {
        return <NavButton name={btn.name} href={btn.href} offset={[offset, setOffset]} length={[length, setLength]} />;
    })

    return (
        <div 
        onMouseOver={() => setVis(1)}
        onMouseLeave={() => setVis(0)}
        style={myStyle} 
        className="fixed top-0 w-full h-20 z-50 p-4 flex">
            <div className="relative bg-gray-50 rounded-lg shadow-sm flex-shrink w-full flex justify-center items-center gap-11">
                <span className="absolute left-4 h-full flex items-center font-PublicSans text-xl text-gray-800">Blake Moody</span>
                {buttonList}
                <div style={highlightStyle} className="absolute bottom-[10%] h-[80%] z-50 bg-gray-100 rounded-sm transition-all"></div>
                <div className="absolute right-4 z-50"><NavButton name="Contact" href="#" offset={[offset, setOffset]} length={[length, setLength]} /></div>
            </div>
            
        </div>
    );
}

export default ScrollNav;