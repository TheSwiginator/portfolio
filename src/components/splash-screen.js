// Imported components
import ProfileCard from './profile-card';
import MapMarker from './map-marker';

// Imported Page Data (json, png, svg, etc...)
import aboutMeData from './content/json/aboutme-text.json';
import Mass from './content/images/mass.svg';
import BGImage from './content/images/bg-blake-3.svg';

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

export default function SplashScreen() {
    return (
        <>
            <Slide>
                <BackdropLondon />
                
                <div className="map-area absolute right-0 bottom-4 w-1/2 h-[60%] z-30">
                    <MapMarker city="Swampscott" x="60vh" y="60px" color="#6EE7B7" />
                    <MapMarker city="Salem" x="67vh" y="80px" color="#9CA3AF" />
                    <MapMarker city="Boston" x="46vh" y="90px" color="#9CA3AF" />
                </div>
                <img className="map absolute bottom-0 right-10 w-auto h-1/2 z-0" src={Mass} alt="Map" />
                <div className="home-content absolute right-0 flex flex-col w-1/2 items-end h-full justify-center gap-4 z-20">
                    <HomeTitle />
                    <p className="desc-1 text-right font-PublicSans text-lg text-gray-500 pr-4">A skilled developer with a passion to learn and create. Has experience in both front-end and back-end developement, coming from an vocational highschool with extensive knowledge in Information Technology. </p>
                </div>
                <span className="map-caption absolute bottom-16 right-[5vh] text-3xl text-right font-PublicSans text-gray-300">Based in <span className="text-green-200">Swampscott</span>,<br />Massachusetts</span>
            </Slide>
            <div className="w-full h-[50vh] mt-16 mb-16 flex justify-center gap-4">
                <ProfileCard />
                <div className=" w-2/5 h-full flex flex-col">
                    <h2 className="font-PublicSans text-5xl text-bold text-gray-700">Hello</h2>
                    <p className="pt-8 pl-1 font-PublicSans text-base text-gray-800 font-light">{aboutMeData}</p>
                </div>
            </div>
        </>
    );
}