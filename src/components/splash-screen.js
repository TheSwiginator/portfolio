// React dependencies
import { useEffect , useState } from 'react';

// Imported components
import ProfileCard from './profile-card';
import MapMarker from './map-marker';

// Imported Page Data (json, png, svg, etc...)
import aboutMeData from './content/json/aboutme-text.json';
import Mass from './content/images/mass.svg';
import BGImage from './content/images/bg-blake-3.svg';
import PROFILE from './content/images/splash/splash-screen-profile.svg';
import WAVES from './content/images/splash/splash-screen-waves.svg';

const Slide = (props) => {
    return (
        <div className="relative h-[100vh] w-full flex pr-10 pl-10">{props.children}</div>
    );
};

const HomeTitle = () => {
    return (
        <div className="flex flex-col items-end gap-4">
            <div className="relative right-[0px] w-[100% - 30px]">
                <p className="ml-[40px] line-1 anim-typewriter1 font-PublicSans text-9xl font-semibold text-gray-700 drop-shadow-lg"><span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 via-blue-300 to-green-300">Hi,</span> my name is Blake.</p>
            </div>
            <div className="relative left-[0px]">
                <p className="line-1 anim-typewriter2 font-PublicSans text-9xl font-semibold text-gray-700 drop-shadow-lg">I'm a <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 via-blue-300 to-green-300">developer.</span></p>
            </div>
        </div>
    );
}
  
const BackdropLondon = () => {return <img className="absolute top-[-50vh] left-[-22vw] w-1/2 h-auto z-[-5]" src={BGImage} alt="bg-me" />;};

function Background() {
    return (
        <div className='absolute w-full h-[100vh] top-0 left-0 flex flex-row'>
            <div className='w-[37.5%] h-auto flex flex-row-reverse items-center overflow-hidden relative'>
                <div className='w-[200vh] h-auto absolute right-0 flex flex-row justify-end'>
                    <img className='absolute right-0 w-[40%] h-auto transform translate-y-[-25%]' src={PROFILE} alt='profile' />
                </div>
                
            </div>
            <div className='w-[62.5%] h-full flex flex-row flex-start items-center relative'>
                <div className='w-[200vh] h-full absolute left-0 flex flex-row'>
                    <img className=' h-[285%] absolute left-[-13.5%] rounded-[11px] transform translate-y-[-21.75%]' src={WAVES} alt='waves' />
                </div>
                
            </div>
        </div>
    );
}

function Foreground() {

    const values = ['developer', 'meme enthusiast' ,'tech guy'];
    const [value, setValue] = useState(0);
    const [vis, setVis] = useState(1);

    const keyframes = [
        {opacity: 0},
        {opacity: 1}
    ]

    const timing = {
        duration: 1000,
        iterations: 1
    }

    useEffect(() => {
        document.getElementById('page-value').animate(keyframes, timing);
    }, [value]);

    useEffect(() => {
        var interval;
        var count = 0;
        interval = setInterval(() => {
            if (count + 1 < values.length) {
                count++
            } else {
                console.log('reset');
                count = 0;
            }
            setValue(count);
        }, 10000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className='absolute w-full h-[100vh] top-0 left-0 flex flex-row justify-end'>
            <div className='w-[62.5%] h-full flex flex-col justify-center items-end relative'>
                <h1 className='font-PublicSans text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold inline text-right'>
                    <span className='bg-gradient-to-r from-blue-500 via-blue-300 to-green-300 bg-clip-text text-transparent'>Hi,</span> my name is Blake.
                </h1>
                <h1 className='font-PublicSans text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold inline text-right'>
                    I'm a <span id='page-value' className='bg-gradient-to-r from-blue-500 via-blue-300 to-green-300 bg-clip-text text-transparent relative'>{values[value]}</span>.
                </h1>
            </div>
        </div>
    )
}

export default function SplashScreen() {
    return (
        <div className='w-full h-[100vh] relative overflow-hidden'>
            <Background />
            <Foreground />
        </div>
    );
}