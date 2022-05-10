import React, { useState } from "react";
import MS_ICON from './content/images/ms-icon.svg';
import COMPTIA_ICON from './content/images/comptia-logo.svg';
import OSHA_ICON from './content/images/osha-logo.svg';
import CAL_ICON from './content/images/calendar-icon.svg';
import LOC_ICON from './content/images/location-icon.svg';
import CERT_DATA from './content/json/certification-data.json';

const MoreCerts = (props) => {
    const [value, setValue] = useState(85);

    const myStyle = {
        filter: "brightness("+value+"%)",
        opacity: value/100,
    }

    return (
        <div
        style={myStyle} 
        onMouseEnter={() => setValue(100)} 
        onMouseLeave={() => setValue(85)} 
        onMouseDown={() => setValue(85)} 
        onMouseUp={() => setValue(100)} 
        className="w-[30px] h-[200px] m-4 bg-gray-200 font-PublicSans text-base text-gray-400 flex justify-center items-center rounded-lg shadow-lg transition-all ease-in-out ">
            {props.children}
        </div>
    );
}
/* This is for the gradient bullet for the skills list in the certifcation items */
// <div className="w-[10px] h-full rounded-full bg-gradient-to-b from-blue-500 via-blue-300 to-green-300"></div>

/* This is for an unimplemented button to expand the certification description/skills outline */
//<div className="flex flex-row justify-center items-center pt-[15px] pb-[15px] pl-[20px] pr-[20px] static w-auto h-full bg-blue-500 border-[3px] border-slate-700 box-border font-PTSansNarrow font-extralight text-[1.2rem] leading-8 ">Expand</div>

function Cert(props) {
    const [rowSpan, setSpan] = useState(3);

    const listSkills = props["skills"].map((skill) => <li>{skill}</li>);

    var ICON;

    if (props.company === "Microsoft") {
        ICON = <img className="static w-auto h-[25px] left-[173px] top-[9.5px]" src={MS_ICON} alt={props.company} />;

    } else if (props.company === "CompTia") {
        ICON = <img className="static w-auto h-[25px] left-[173px] top-[9.5px]" src={COMPTIA_ICON} alt={props.company} />;
    } else {
        ICON = <img className="static w-auto h-[25px] left-[173px] top-[9.5px]" src={OSHA_ICON} alt={props.company} />;
    }

    return (
        <div className="cert-container w-[425px] h-auto flex flex-col items-start p-[20px] border-2 border-gray-100 row-span-1 hover:row-span-2 transition-all">
            <div className="flex flex-row items-center p-0 gap-2">
                <div class="static left-0 top-[5.5px] font-PublicSan font-medium text-[1.5rem] leading-[2.2rem] text-slate-700 opacity-70">{props.company}</div>
                {ICON}
            </div>
            <h2 className="m-0 p-0 static font-PublicSans font-semibold text-[3rem] leading-[3.7rem] text-slate-700">Certification</h2>
            <h2 className="m-0 p-0 static font-PublicSans italic font-light text-[3rem] leading-[3.7rem] text-[#374151] opacity-[0.8]">{props.code}</h2>
            <h3 className="static mt-1 left-[20px] top-[225px] font-PublicSans font-light text-[1.65rem] leading-[1.9rem] text-[#374151]">{props.name}</h3>
            <div className="flex flex-row items-center p-0 mt-1 static h-[28px] left-[20px] gap-2">
                <img src={CAL_ICON} alt="Calendar" />
                <p className="static h-[18px] left-[29px] top-[5px] font-PublicSans font-light text-[0.7rem] leading-[18px] flex items-center text-[#374151] opacity-[0.7]">{props.date}</p>
                <div className="static w-1 h-1 left-[91px] top-[12px] bg-[#374151] opacity-[0.7] rounded-full"></div>
                <img src={LOC_ICON} alt="Location" />
                <p className="static h-[18px] left-[29px] top-[5px] font-PublicSans font-light text-[0.7rem] leading-[18px] flex items-center text-[#374151] opacity-[0.7]">Hawthorne, Massachusetts</p>
                
            </div>
            <div className="skills-list flex flex-row items-start gap-[10px] p-[5px] static w-full h-0 bg-white overflow-hidden transition-all">
                <ul className="p-0 m-0 list-none text-sm font-PublicSans font-light text-[0.8rem] leading-5 text-slate-600">{listSkills}</ul>
            </div>
            <div className="flex flex-row items-start gap-3 pt-[10px] static w-auto h-[61px]">
                
                <div className="flex flex-row justify-center items-center pt-[15px] pb-[15px] pl-[20px] pr-[20px] static w-auto h-full bg-white border-[1px] border-slate-200 box-border font-PTSansNarrow font-extralight text-[1.2rem]  leading-8 ">Learn More</div>
            </div>
        </div>
    );

}


function CertList(props) {
    const [certI, setCertI] = useState(0);

    const ListOfCerts = CERT_DATA.map(cert => <Cert {...cert} />);

    return (
        <div className="w-full h-auto flex justify-center mt-[2000px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-4 xl:grid-cols-3 xl:grid-rows-3 gap-5">
                {ListOfCerts}
            </div>
        </div>
        
    );
}

export default CertList;