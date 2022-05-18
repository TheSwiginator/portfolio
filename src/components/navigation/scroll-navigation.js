// React dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Imported components
import { NavigationList , NavigationListItem } from './navigation-list';

// Page data
import NAV_DATA from '../content/json/navigation-data.json';

function waitForPause(ms, callback) {
    var timer;

    return function() {
        var self = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
            callback.apply(self, args);
        }, ms);
    };
}

function ScrollNav({btns , pageIndex }) {
    const [isNavHidden, setNavHidden] = useState(false);

    const navigationElement = (name, href) => <Link to={href} className='w-auto h-auto px-5 py-3 flex items-center justify-center font-PublicSans text-sm text-slate-700'>{name}</Link>;
    const navigationList = NAV_DATA.map(item => navigationElement(item.name, item.href));

    function handleScroll(e) {
        console.log(isNavHidden);
        setNavHidden(window.scrollY < 300);
    }

    useEffect(() => {
        window.addEventListener('scroll', (e) => waitForPause(30, handleScroll(e)), { passive: true });

        return function cleanup() {
            window.removeEventListener('scroll', console.log('done'));
        }
    }, [])

    const style = {
        transform: `translateY(${isNavHidden ? -120 : 0}%)`,
    }

    return (
        <div className={`fixed top-0 w-full h-auto p-2 flex justify-center items-center z-50`}>
            <div style={style} className='w-full h-auto flex justify-center flex-row relative bg-slate-50 rounded-lg shadow-sm transition-transform'>
                <NavigationList className='w-full h-full rounded-sm bg-slate-100'>
                    {navigationList}
                </NavigationList>
            </div>
            
        </div>
        
    );
}

export default ScrollNav;