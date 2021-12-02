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
import ethsLogo from './components/content/images/eths-logo.png';
import EducationSection from './components/education-section/education-section';


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

function Blob() { // maybe maybe maybe
  return (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <path style="fill-rule: nonzero; paint-order: fill; stroke-width: 0px; stroke: rgb(191, 219, 254); fill: rgb(219, 234, 254);" d="M 252.945 401.988 C 282.773 463.227 374.627 341.535 408.429 287.303 C 445.759 237.913 504.624 256.305 457.586 170.203 C 388.616 47.315 252.374 60.388 205.77 70.597 C 120.31 84.809 115.817 122.659 121.375 166.951 C 132.464 255.311 93.924 291.297 76.09 355.813 C 56.17 427.871 232.541 360.094 252.945 401.988 Z"></path>
      <path style="fill-rule: nonzero; paint-order: fill; stroke-width: 0px; stroke: rgb(191, 219, 254); fill: rgb(191, 219, 254);" d="M 143.538 416.487 C 173.366 477.726 329.149 317.854 362.951 263.622 C 400.281 214.232 442.276 205.543 395.238 119.441 C 326.268 -3.447 210.892 126.385 164.288 136.594 C 78.828 150.806 88.541 181.553 52.368 184.114 C -36.463 190.4 -3.051 280.047 37.272 310.822 C 96.495 356.449 123.134 374.593 143.538 416.487 Z"></path>
      <path style="fill-rule: nonzero; stroke: rgb(0, 162, 255); fill: rgb(147, 197, 253); paint-order: fill; stroke-width: 0px;" d="M 134.855 349.437 C 164.683 410.676 388.39 341.814 422.192 287.582 C 459.522 238.192 368.332 180.225 321.294 94.123 C 252.324 -28.765 227.958 134.363 181.354 144.572 C 95.894 158.784 110.49 140.696 74.317 143.257 C -14.514 149.543 28.221 237.859 68.544 268.634 C 127.767 314.261 114.451 307.543 134.855 349.437 Z"></path>
      <path style="fill-rule: nonzero; fill: rgb(0, 162, 255); stroke: rgb(0, 162, 255);" d="M 83.557 363.901"></path>
    </svg>
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
        <div className="absolute top-[2950px] w-full h-[100vh]">
          <EducationSection name="eths" />
        </div>
        <div className="absolute top-[4500px] w-full h-[100vh]">
          <EducationSection name="umb" />
        </div>
      </div>
    </div>
  );
};

export default App;
