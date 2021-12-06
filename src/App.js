import './App.css';
import './index.css';
// eslint-disable-next-line
import ProfileCard from './components/profile-card';
import BGImage from './components/content/images/bg-blake-3.svg';
import BGImage2 from './components/content/images/bg-blake-ice.svg';
import BGImage3 from './components/content/images/laptop.svg';
import Mass from './components/content/images/mass.svg';
import MapMarker from './components/map-marker';
import CertList from './components/cert';
import BubbleNav from './components/bubble-navigation';
import ScrollNav from './components/scroll-navigation';
import React, { useState, useEffect } from 'react';
import navData from './components/content/json/navigation-data.json';
import certData from './components/content/json/certification-data.json';
import Resume from './components/resume.js';
import aboutMeData from './components/content/json/aboutme-text.json';
import H2X from './components/h2x';
import ULX from './components/list'


console.log(navData);

//https://umbrella.lib.umb.edu/permalink/01MA_UMB/1a3vcr/alma9919493328703746

const Slide = (props) => {
  return (
    <div className="relative h-[100vh] w-full flex pr-10 pl-10">{props.children}</div>
  );
};

const DoubleSlide = (props) => {
  return (
    <div className="relative h-[200vh] w-full flex pr-10 pl-10">{props.children}</div>
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
const BackdropIceland = () => {return <img className="absolute top-[-20vh] left-[-30vw]" src={BGImage2} alt="bg-me" />;};
const BackdropLaptop = () => {return <img className="absolute w-1/5 h-auto right-0 top-[75vh]" src={BGImage3} alt="laptop" />;};

function Lace() {
  return (
    <div className="w-full h-[2px] bg-gradient-to-r from-blue-500 via-blue-300 to-green-300"></div>
  );
}

function App() {
  const skills = 0;

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
        <div className="pl-4 mt-[300px]">
          <H2X 
          textClassName="relative w-1/2 font-PublicSans text-gray-700 text-3xl" 
          matchClassName="inline-block relative text-3xl font-bold" 
          keywords={['Essex North Shore Agricultural and Technical School', 'information technology']}>
            Coming from Essex North Shore Agricultural and Technical School, I have extensive knowledge in information technology.
          </H2X>
          <div className="grid grid-cols-2 w-2/5">
            <ULX title="Knowledge in Computer Hardware" items={["Identifying internal PC components","Installing and removing hardware components","Performing preventative maintinence"]} />
            <ULX title="Knowledge in Linux" items={["Basic Linux commands","Navigating filesytems","Managing file permissions","Text editors such as Vim and Nano","Utilizing package manager"]} />
            <ULX title="Knowledge in Internetworking" items={["Understanding subnetting IPv4 addresses","Simulating network infrastructure with Cisco Packet Tracer","Extensive knowledge in CiscoIOS","OSI Model and Protocols"]} />
            <ULX title="Knowledge in Computer Hardware" items={["Identifying internal PC components","Installing and removing hardware components","Performing preventative maintinence"]} />
          </div>
          <H2X 
          textClassName="relative w-1/2 font-PublicSans text-gray-700 text-3xl mt-8" 
          matchClassName="inline-block relative text-3xl font-bold" 
          keywords={['University of Massacusetts Boston', 'computer science']}>
            I am currently attending University of Massacusetts Boston as a full time computer science student.
          </H2X>
        </div>
      </div>
    </div>
  );
};

/*

*/

export default App;
