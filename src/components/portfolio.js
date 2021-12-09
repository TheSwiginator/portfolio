import '../index.css';
import PYTHON_ICON_SVG from '../components/content/images/python.svg';
import LUA_ICON_SVG from '../components/content/images/lua.svg';

function Portfolio() {
    return (
        <><div className="h-96 relative border-gray-800 border-2 bg-white">
            <div className="paddle-l absolute left-4 w-6 h-1/3 bg-blue-500 shadow-lg rounded-md"></div>
            <div className="paddle-r absolute right-4 w-6 h-1/3 bg-green-300 shadow-lg rounded-md"></div>
            <div className="pong-ball absolute left-0 top-0 w-8 h-8 bg-gray-50 shadow-lg border-2 border-gray-100 rounded-full"></div>
        </div>
        <div className="pr-24 flex flex-col justify-center">
            <h2 className="font-PublicSans text-4xl text-gray-800 font-semibold">Pong Online</h2>
            <p className="font-PublicSans text-base text-blue-500 italic">Completed on July, 2018</p>
            <p className="font-PublicSans text-base text-gray-800">During my sophomore year of highschool, me and classmate applied our knowledge of the OSI transport layer by utilizing the python socket library in order allow separate clients to communicate paddle positional data to each other. My classmate utilized Lua to create a server program. This server program would accept udp packets sent by either of the two clients and relay the information to the other client. The client was created using Python 3.8 and used the socket library for networking and Pygame for the user interface.</p>
            <div className="flex w-[280px] h-[50px] gap-4 items-center pl-4 mt-4 bg-gray-50 shadow-md rounded-md">
              <img className="h-2/3 w-auto" src={PYTHON_ICON_SVG} alt="https://www.python.org/" />
              <img className="h-2/3 w-auto" src={LUA_ICON_SVG} alt="https://www.lua.org/" />
            </div>
        </div></>
    );
}

export default Portfolio;