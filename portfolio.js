import '../index.css';
import PYTHON_ICON_SVG from '../components/content/images/python.svg';
import ARROW_LEFT_SVG from '../components/content/images/arrow-left.svg';
import ARROW_RIGHT_SVG from '../components/content/images/arrow-right.svg';
import VERTICAL_DOTS_SVG from '../components/content/images/vertical-dots.svg';
import PAGE_BANNER_SVG from '../components/content/images/page-banner.svg';

import { useRef , useState , useEffect } from 'react';

function Scene() {
    return (
        <div className="h-96 relative border-gray-800 border-2 bg-white">
            <div className="flex flex-col w-full h-full">
                <div className="w-full h-8 bg-gray-500 shadow-md flex items-center z-20">
                    <img src={ARROW_LEFT_SVG} alt="left" className='h-2/3 w-auto ml-[5px] mr-[5px]' />
                    <img src={ARROW_RIGHT_SVG} alt="right" className='h-2/3 w-auto ml-[5px] mr-[5px]' />
                    <div className='flex-grow h-[75%] bg-gray-600 rounded-lg flex items-center'>
                        <div className='font-PublicSans text-sm text-gray-50 opacity-60 text-cursor h-[70%] ml-2'>https://www.bmoody.page/portfolio/home.html</div>
                    </div>
                    <img src={VERTICAL_DOTS_SVG} alt="dots" className='h-full w-auto' />
                </div>
                <div className="page w-full flex-grow relative flex z-10 flex-col">
                    <img src={PAGE_BANNER_SVG} alt='banner' className=' w-full h-auto' />
                    <div className='absolute w-full h-1/4 top-[20%] flex justify-center'>
                        <div className='w-[300px] h-full border-2 border-white font-PublicSans text-6xl font-bold italic text-white flex justify-center items-center'>Portfolio</div>
                    </div>
                    <div className='w-4 h-full absolute right-0 bg-white z-20 flex justify-center'>
                        <div className='w-3/5 h-1/4 bg-gray-200 rounded-full mt-1'></div>
                    </div>
                    <div className='w-full h-8 bg-gray-800 opacity-30 absolute top-0 shadow-sm grid grid-cols-2'>
                        <div className='w-1/2 flex justify-start items-center pl-4 box-border'>
                            <div className='w-[80px] h-2/3 bg-gray-300 rounded-md'></div>
                        </div>
                        <div className='flex justify-end text-right items-center pr-8 box-border'>
                            <div className='w-[35px] h-1/3 bg-gray-300 ml-3'></div>
                            <div className='w-[50px] h-1/3 bg-gray-300 ml-3'></div>
                            <div className='w-[20px] h-1/3 bg-gray-300 ml-3'></div>
                            <div className='w-[40px] h-1/3 bg-gray-300 ml-3'></div>
                            <div className='w-[50px] h-1/3 bg-gray-300 ml-3'></div>
                            <div className='w-[30px] h-1/3 bg-gray-300 ml-3'></div>
                            <div className='w-[30px] h-1/3 bg-gray-300 ml-1'></div>
                        </div>
                    </div>
                    <div className='flex-grow w-full bg-gray-700 flex justify-center items-end box-border'>
                        <div className='relative w-1/2 h-3/4 bg-gray-800 rounded-t-md grid grid-cols-2 shadow-md'>
                            <div className='flex justify-center items-end'>
                                <div className='w-[8vw] h-[4vw] rounded-t-[75px] bg-gray-200'></div>
                            </div>
                            <div className='flex flex-col pt-12 gap-2 box-border'>
                                <div className='w-1/2 h-4 bg-gray-400'></div>
                                <div className=' w-5/6 h-3 bg-gray-400'></div>
                                <div className=' w-3/4 h-3 bg-gray-400'></div>
                                <div className=' w-4/5 h-[3px] bg-gray-400'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Description() {
    const ref = useRef(null);
    const narrowness = 100;

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
        setOffset(ref.current.getBoundingClientRect().top);
        }
    }, []);

    var myStyle = {
        top: "0px",
        left: "0px",
    }

    var theirStyle = {
        top: "0px",
        left: "0px",
    }

    var boxStyle;

    const notAbove = offset > narrowness;
    const notBelow = offset < window.innerHeight - 384 - narrowness;
    const inBounds = notAbove && notBelow;

    if (inBounds) {
        myStyle = {
            top: "-10px",
            left: "10px",
            backgroundColor: "#f9fafb",
            boxShadow: "box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",

        }
        theirStyle = {
            top: "10px",
            left: "-10px",
        }
        boxStyle = {
            borderRadius: "0px",
        }
    }

    return (
        <div ref={ref} className="relative pr-24 flex flex-col justify-center">
            <div style={theirStyle} className='absolute w-[75%] h-full bg-gradient-to-r from-blue-500 via-blue-300 to-green-300 transition-all z-10 rounded-md'></div>
            <div style={boxStyle} className='absolute h-full w-[75%] border-2 border-dashed border-gray-800 z-20 rounded-md transition-all'></div>
            <div style={myStyle} className='absolute w-[75%] h-full top-0 left-0 flex flex-col justify-center pl-4 pr-4 bg-white transition-all z-30 rounded-md'>
                <h2 className="font-PublicSans text-4xl text-gray-800 font-semibold">Portfolio Senior Project</h2>
                <p className="font-PublicSans text-base text-blue-500 italic">Completed on May, 2021</p>
                <p className="font-PublicSans text-base text-gray-800">As a senior requirement for all IT students, we had to compile a list of our CTE (Career Technical Education) and Academic achievements and present them in an online google site. After using the google site page I was having trouble adding my own personal style to my site and so, to make my portfolio stick out from the rest, I decided to design my website by hand.</p>
                <div className="flex w-[280px] h-[50px] gap-4 items-center pl-4 mt-4 bg-gray-50 shadow-md rounded-md">
                <img className="h-2/3 w-auto" src={PYTHON_ICON_SVG} alt="https://www.python.org/" />
                </div>
            </div>
            
        </div>
    );
}

export default function Portfolio() {
    return <><Scene /><Description /></>
}