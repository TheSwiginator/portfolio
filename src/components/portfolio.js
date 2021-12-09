import '../index.css';
import PYTHON_ICON_SVG from '../components/content/images/python.svg';
import LUA_ICON_SVG from '../components/content/images/lua.svg';
import ARROW_LEFT_SVG from '../components/content/images/arrow-left.svg';
import ARROW_RIGHT_SVG from '../components/content/images/arrow-right.svg';
import VERTICAL_DOTS_SVG from '../components/content/images/vertical-dots.svg';
import PAGE_BANNER_SVG from '../components/content/images/page-banner.svg';

function Portfolio() {
    return (
        <><div className="h-96 relative border-gray-800 border-2 bg-white">
            <div className="flex flex-col w-full h-full">
                <div className="w-full h-8 bg-gray-500 shadow-md flex items-center z-20">
                    <img src={ARROW_LEFT_SVG} alt="left" className='h-2/3 w-auto ml-[5px] mr-[5px]' />
                    <img src={ARROW_RIGHT_SVG} alt="right" className='h-2/3 w-auto ml-[5px] mr-[5px]' />
                    <div className='flex-grow h-[75%] bg-gray-600 rounded-lg flex items-center'>
                        <div className='font-PublicSans text-sm text-gray-50 opacity-60 text-cursor h-[70%] ml-2'>https://www.bmoody.page/home.html</div>
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
        <div className="pr-24 flex flex-col justify-center">
            <h2 className="font-PublicSans text-4xl text-gray-800 font-semibold">Portfolio Senior Project</h2>
            <p className="font-PublicSans text-base text-blue-500 italic">Completed on May, 2021</p>
            <p className="font-PublicSans text-base text-gray-800">As a senior requirement for all IT students, we had to compile a list of our CTE (Career Technical Education) and Academic achievements and present them in an online google site. After using the google site page I was having trouble adding my own personal style to my site and so, to make my portfolio stick out from the rest, I decided to design my website by hand.</p>
            <div className="flex w-[280px] h-[50px] gap-4 items-center pl-4 mt-4 bg-gray-50 shadow-md rounded-md">
              <img className="h-2/3 w-auto" src={PYTHON_ICON_SVG} alt="https://www.python.org/" />
              <img className="h-2/3 w-auto" src={LUA_ICON_SVG} alt="https://www.lua.org/" />
            </div>
        </div></>
    );
}

export default Portfolio;