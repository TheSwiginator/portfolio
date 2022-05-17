import { useState , useEffect , useRef } from 'react';

function NavigationButton({ currentButtonRef , setCurrentButtonRef , children }) {
    const buttonRef = useRef();

    function handleMouseEnter() {
        setCurrentButtonRef(buttonRef.current);
    }

    return (
        <div ref={buttonRef} onMouseEnter={() => handleMouseEnter()} className='relative h-auto z-[6]'>{children}</div>
    )
}

function NavigationListItem({ children , onClick }) {

    return (
        <div onClick={onClick} className='w-full h-full py-[10px] px-[40px] flex items-center justify-center font-PublicSans text-slate-700 text-sm select-none font-extralight hover:underline'>{children}</div>
    )
}

function NavigationList({ children , className='border-slate-700 border-[0.5px] w-full h-full rounded-sm' }) {
    const [currentButtonRef, setCurrentButtonRef] = useState(null);

    const navigationItems = children.map((child, index) => <NavigationButton key={index} currentButtonRef={currentButtonRef} setCurrentButtonRef={setCurrentButtonRef}>{child}</NavigationButton>);

    const highlightStyle = {
        position: 'absolute',
        left: (currentButtonRef != null ? currentButtonRef.offsetLeft : 0)+'px',
        top: (currentButtonRef != null ? currentButtonRef.offsetTop : 0)+'px',
        width: (currentButtonRef != null ? currentButtonRef.offsetWidth : 0)+'px',
        height: (currentButtonRef != null ? currentButtonRef.offsetHeight : 0)+'px'
    }

    return (
        <div className='nav-list w-auto h-auto flex flex-row gap-[25px] relative'>
            {navigationItems}
            <div style={highlightStyle} className='nav-list-highlight opacity-0 flex items-end justify-end rounded-md z-auto py-[3px] box-border'>
                <div className={className}></div>
            </div>
            
        </div>
    )
}

export { NavigationList , NavigationListItem }