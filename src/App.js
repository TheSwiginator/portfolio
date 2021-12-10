import './App.css';
import './index.css';
// eslint-disable-next-line
import ProfileCard from './components/profile-card';
import BGImage from './components/content/images/bg-blake-3.svg';
import Mass from './components/content/images/mass.svg';
import MapMarker from './components/map-marker';
import CertList from './components/cert';
import BubbleNav from './components/bubble-navigation';
import ScrollNav from './components/scroll-navigation';
import navData from './components/content/json/navigation-data.json';
import certData from './components/content/json/certification-data.json';
import Resume from './components/resume.js';
import aboutMeData from './components/content/json/aboutme-text.json';
import H2X from './components/h2x';
import ULX from './components/list'
import aboutUMBDataCS from './components/content/json/edu-umb-about-text-cs.json';
import aboutUMBDataJP from './components/content/json/edu-umb-about-text-jp.json';
import ETHS1 from './components/content/images/eths-photo1.png';
import ETHS2 from './components/content/images/skills-slide3.jpg';
import ImageX from './components/stylized-image';
import ETHS4 from './components/content/images/eths-photo2.png';
import UMB1 from './components/content/images/umb-photo1.png';
import UMB2 from './components/content/images/umb-photo2.jpg';
import Pong from './components/pong';
import Portal from './components/portal';
import Portfolio from './components/portfolio';

console.log(navData);

//https://umbrella.lib.umb.edu/permalink/01MA_UMB/1a3vcr/alma9919493328703746

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

const BackdropLondon = () => {return <img className="absolute top-[-50vh] left-[-22vw] w-1/2 h-auto" src={BGImage} alt="bg-me" />;};

function App() {

  return (
    <div className=" overflow-hidden relative w-full h-[10000px]">
      
      <div className="absolute w-full h-full flex flex-col">
        <BubbleNav btns={navData} />
        <ScrollNav btns={navData} />
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
        <div>
          <CertList certs={certData}/>
          <Resume />
        </div>
        <div className="relative ml-4 mt-[300px]">
          <H2X 
          textClassName="relative w-1/2 font-PublicSans text-gray-700 text-3xl" 
          matchClassName="inline-block relative text-3xl font-bold" 
          keywords={['Essex North Shore Agricultural and Technical School', 'information technology']}>
            Coming from Essex North Shore Agricultural and Technical School, I have extensive knowledge in information technology.
          </H2X>
          <p className="font-PublicSans text-base text-gray-600 border-2 border-gray-100 pl-2 pt-1 pb-1 w-72 leading-6 font-light rounded-md bg-gray-50 shadow-lg mt-4">Class of 2021<br />565 Maple St, Danvers, MA 01923</p>
          <div className="grid grid-cols-2 w-2/5">
            <ULX title="Knowledge in Computer Hardware" items={["Identifying internal PC components","Installing and removing hardware components","Performing preventative maintinence"]} />
            <ULX title="Knowledge in Linux" items={["Basic Linux commands","Navigating filesytems","Managing file permissions","Text editors such as Vim and Nano","Utilizing package manager"]} />
            <ULX title="Knowledge in Internetworking" items={["Understanding subnetting IPv4 addresses","Simulating network infrastructure with Cisco Packet Tracer","Extensive knowledge in CiscoIOS","OSI Model and Protocols"]} />
          </div>
          <H2X 
          textClassName="relative w-1/2 font-PublicSans text-gray-700 text-3xl mt-8" 
          matchClassName="inline-block relative text-3xl font-bold" 
          keywords={['University of Massacusetts Boston', 'computer science']}>
            I am currently attending University of Massacusetts Boston as a full time computer science student.
          </H2X>
          <p className="font-PublicSans text-base text-gray-600 border-2 border-gray-100 pl-2 pt-1 pb-1 w-72 leading-6 font-light rounded-md bg-gray-50 shadow-lg mt-4">Class of 2025<br />100 William T Morrissey Blvd, Boston, MA 02125</p>
          <div className="grid grid-cols-1 w-2/5">
            <ULX title="Computer Science BS" items={[aboutUMBDataCS]} />
            <p className="font-PublicSans text-xs text-gray-200 mt-1 italic">Description provided by UMass Boston</p>
            <a className="font-PublicSans text-sm text-gray-400 mt-2 italic underline" href="https://www.umb.edu/academics/csm/computer_science/ug/computer_science_bs" alt="Click here to learn more">Click here to learn more</a>
            <ULX title="Japanese - JAPAN 102" items={[aboutUMBDataJP]} />
            <p className="font-PublicSans text-xs text-gray-200 mt-1 italic">Description provided by UMass Boston</p>
            <a className="font-PublicSans text-sm text-gray-400 mt-2 italic underline" href="https://www.umb.edu/academics/csm/computer_science/ug/computer_science_bs" alt="Click here to learn more">Click here to learn more</a>
          </div>
          <ImageX width="300px" height="300px" top="300px" right="400px" captionTop="-50px" captionLeft="-20px" src={ETHS1} alt="My Highschool" caption="My Highschool, 2017" />
          <ImageX width="250px" height="250px" top="100px" right="50px" captionTop="80px" captionLeft="-30px" src={ETHS2} alt="Skills USA District Competition" caption="Skills USA District Competition, 2018" alignItems="end" />
          <ImageX width="220px" height="220px" top="500px" right="100px" captionTop="40px" captionLeft="40px" src={ETHS4} alt="My Highschool" caption="IT Shop Classroom, 2018" alignItems="end" />
          <ImageX width="350px" height="350px" top="800px" right="250px" captionTop="40px" captionLeft="40px" src={UMB2} alt="My Highschool" caption="UMass Boston Dorm 10th Floor, 2021" alignItems="end" />
          <ImageX width="220px" height="220px" top="700px" right="700px" captionTop="-30px" captionLeft="35px" src={UMB1} alt="My Highschool" caption="UMass Boston Entrance Sign" />
          
        </div>
        <H2X 
        textClassName="w-full font-PublicSans p-0 m-0 ml-2 text-gray-700 text-5xl mt-12" 
        matchClassName="inline-block relative text-5xl font-bold" 
        keywords={["projects", "highlights"]}>In my spare time, I like to work on projects. Here are some highlights.
        </H2X>
        <div className="w-full relative grid grid-cols-2 mt-16 ml-16 gap-4">
          <Pong />
          <Portal />
          <Portfolio />
        </div>
        

      </div>
    </div>
  );
};

export default App;