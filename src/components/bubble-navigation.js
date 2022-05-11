import '../index.css';
import React, { useState, useEffect } from 'react';

function Bubble(props) {
    const [count, setCount] = useState(true);

    const thisStyle = {
        right: '-10%',
        animation: "BubbleFloat " + props.timeY + "s ease-in-out infinite, BubbleMove " + props.timeX + "s linear infinite",
        animationDirection: props.direction,
        animationDelay: props.delay + "s",
        animationPlayState: count,
    };

    return (
        <div style={thisStyle} onMouseLeave={() => setCount('running')} onMouseEnter={() => setCount('paused')} className={"absolute w-[130px] h-[130px] hover:animation-paused"}>{props.children}</div>
    );
};

function BubbleLink(props) {
    return (
      <a href={props.href} className="relative w-full h-full bg-gray-100 backdrop-filter opacity-90 rounded-full shadow-lg flex flex-col justify-center items-center">
        <h1 className="font-PublicSans  text-base text-center text-blue-500 font-semibold">{props.name}</h1>
        <p className=" animate-pulse text-gray-300 italic text-sm">Click for more</p>
      </a>
    );
}

function BubbleNav({btns}) {
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
      opacity: (1 - scrollPosition / 200 < 0) ? 0 : (1 - scrollPosition / 200),
      display: (scrollPosition >= 200) ? "none" : "inline",
    }
    
    const bubbleList = btns.map((btn) => {
        return (
            <Bubble 
            timeY={btn.timeY} 
            timeX={btn.timeX} 
            delay={btn.delay} 
            direction={btn.direction}>
                <BubbleLink 
                name={btn.name} 
                href={btn.link} />
            </Bubble>
        );
    });
  
    return (
      <div style={myStyle} className="absolute top-0 w-full h-[200px] z-50">
        {bubbleList}
      </div>
    );
}

export default BubbleNav;