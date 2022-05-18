import '../../index.css';
import PYTHON_ICON_SVG from '../content/images/python.svg';
import LOVE_CUBE_PNG from '../content/images/love-cube.png';

import { useState } from 'react';

function Portal() {
    const [myEl, setMyEl] = useState(0);
    const [mPos, setMPos] = useState([0, 0]);
    const [pPos, setPPos] = useState([0, 0]);

    const myRect = el => {
        if (!el) {return};
        setMyEl(el);
    }

    const handleMouseMove = e => {
        const mLeft = e.clientX - myEl.getBoundingClientRect().left;
        const mTop = e.clientY - myEl.getBoundingClientRect().top;
        var left = document.getElementsByClassName('player')[0].getBoundingClientRect().left - myEl.getBoundingClientRect().left;
        var top = document.getElementsByClassName('player')[0].getBoundingClientRect().top - myEl.getBoundingClientRect().top;
        setMPos([mLeft, mTop]);
        setPPos([left - mPos[0], top - mPos[1]]);
    }

    return (
        <><div ref={el => myRect(el)} onMouseMove={e => handleMouseMove(e)} className="portal-box h-96 relative border-gray-800 border-2 bg-white">
            <div style={{left: mPos[0] + pPos[0] * 0, top: mPos[1] + pPos[1] * 0}} className="vector absolute w-2 h-2 bg-gray-500 rounded-full transition-all"></div>
            <div style={{left: mPos[0] + pPos[0] * 0.25, top: mPos[1] + pPos[1] * 0.25}} className="vector absolute w-2 h-2 bg-gray-500 rounded-full transition-all"></div>
            <div style={{left: mPos[0] + pPos[0] * 0.5, top: mPos[1] + pPos[1] * 0.5}} className="vector absolute w-2 h-2 bg-gray-500 rounded-full transition-all"></div>
            <div style={{left: mPos[0] + pPos[0] * 0.75, top: mPos[1] + pPos[1] * 0.75}} className="vector absolute w-2 h-2 bg-gray-500 rounded-full transition-all"></div>
            <div className="portal-player absolute bottom-0 left-1/3">
                <div className="player w-6 h-6 rounded-full bg-gray-100 shadow-md"></div>
                <div className="player w-6 h-9 mt-1 rounded-b-sm rounded-t-lg bg-gray-100 shadow-md"></div>
            </div>
            <div className="portal w-24 h-3 rounded-t-md border-t-2 border-l-2 border-r-2 border-blue-600 bg-blue-500 absolute left-1/3 ml-[-36px] bottom-0 shadow-md"></div>
            <div className="portal w-24 h-3 rounded-t-md border-t-2 border-l-2 border-r-2 border-green-400 bg-green-300 absolute left-2/3 ml-[-36px] bottom-0 shadow-md"></div>
            <div className="w-1/4 h-[80px] absolute left-0 top-[160px] bg-gray-50 border-2 border-l-0 border-gray-100 shadow-lg rounded-r-md"></div>
            <div className="w-1/5 h-[80px] absolute right-0 top-[200px] bg-gray-50 border-2 border-r-0 border-gray-100 shadow-lg rounded-l-md"></div>
            <div className="w-[30px] h-[20px] absolute top-[100px] right-[40px] bg-red-500 rounded-sm rounded-br-none shadow-sm border-0 border-gray-800"></div>
            <div className="w-[10px] h-[80px] absolute top-[120px] right-[40px] bg-red-500 border-0 shadow-sm border-b-0 border-t-0 border-gray-800"></div>
            <img src={LOVE_CUBE_PNG} alt="love-cube" className="w-[70px] h-[70px] absolute top-[102px] left-4" />
        </div>
        <div className="pr-24 flex flex-col justify-center">
            <h2 className="font-PublicSans text-4xl text-gray-800 font-semibold">Portal</h2>
            <p className="font-PublicSans text-base text-blue-500 italic">Completed on February, 2019</p>
            <p className="font-PublicSans text-base text-gray-800">In order to fully apply my skills with the pygame library, I made a physics based puzzle game, inspired by the popular game made by Valve in 2007. The game requires that the player place portals in specific positions in order to progress through each level. As usual, I decided to overengineer the entire game by creating and implementing my own physics engine with collision mechanics and gravity. Creating these tools from the ground up allowed me to implement a level builder that the user could use to create their own levels and test unique portal physics.</p>
            <div className="flex w-[280px] h-[50px] gap-4 items-center pl-4 mt-4 bg-gray-50 shadow-md rounded-md">
                <img className="h-2/3 w-auto" src={PYTHON_ICON_SVG} alt="https://www.python.org/" />
            </div>
        </div></>
    );
}

export default Portal;