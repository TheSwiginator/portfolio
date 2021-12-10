import React, { useState } from "react";

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



function Cert(props) {
    const myStyle = {
        backgroundColor: props.accentColor,
    };

    const shadowStyle = {
        backgroundColor: props.accentColor,
        filter: "brightness(90%)",
    };

    const skills = props.skills;
    const listSkills = skills.map((skill) => <li>{skill}</li>
    );

    // eslint-disable-next-line
    const linkA = <a href="#" className="bg-gray-200 rounded-md shadow-md border-gray-50 flex justify-center items-center hover:animate-pulse">Visit Site</a>;
    // eslint-disable-next-line
    const linkB = <a href="#" className="bg-gray-200 rounded-md shadow-md border-gray-50 flex justify-center items-center hover:animate-pulse">View Certificate</a>;

    const defaultPane = <>
                    <div style={myStyle} className="absolute w-[40px] h-1/4 right-4 shadow-md leading-4 text-gray-700 flex justify-center items-center"><span className="rotate-text font-PublicSans text-bold">{props.date}</span>
                        <div style={myStyle} className="absolute w-1/2 h-4 right-0 top-full bg-black rounded-bl-full"></div>
                        <div style={myStyle} className="absolute w-1/2 h-4 left-0 top-full bg-black rounded-br-full"></div>
                    </div>
                    <div style={myStyle} className="absolute w-[40px] h-[20px] right-4 top-[-20px] rounded-tr-[20px]">
                        <div style={myStyle} className="absolute h-full w-[40%] right-full"></div>
                        <div style={shadowStyle} className="absolute h-full w-[80%] right-full rounded-t-[20px]"></div>  
                    </div>
                    <div className="w-full h-1/3"></div>
                    <div className="w-full h-2/3 p-4">
                        <h1 className="font-PublicSans text-lg text-gray-600 leading-5"><span className="text-gray-400 text-3xl italic font-thin leading-[50px]">{props.code}</span><br />{props.name}</h1>
                        <ul  className="font-PublicSans text-sm text-gray-600 pt-4">
                            <li className="font-bold">Skills Measured:</li>
                            {listSkills}
                        </ul>
                    </div>
                    <div className="absolute w-full h-[40px] bottom-4 grid grid-cols-2 gap-4 pl-4 pr-4 font-PublicSans text-gray-800 text-sm">
                        {linkA}
                        {linkB}
                    </div>
                    </>;

    if (props.company === "Microsoft") {
        return (
            <div className="cert-panel-microsoft relative w-[300px] h-full bg-gray-50 border-2 border-gray-200 rounded-lg shadow-lg">
                {defaultPane}
            </div>
        );
    } else if (props.company === "CompTia") {
        return (
            <div className="cert-panel-comptia relative w-[300px] h-full bg-gray-50 border-2 border-gray-200 rounded-lg shadow-lg">
                {defaultPane}
            </div>
        );
    } else if (props.company === "Osha") {
        return (
            <div className="cert-panel-osha relative w-[300px] h-full bg-gray-50 border-2 border-gray-200 rounded-lg shadow-lg">
                {defaultPane}
            </div>
        );
    }

}


function CertList(props) {
    const [certI, setCertI] = useState(0);

    const certs = props.certs;
    const listCerts = certs.map((cert) => 
        <Cert {...cert} />
    );

    const [shownCerts, setShownCerts] = useState(listCerts.slice(certI, certI+3));
    
    const handleMouseDown = (n) => {
        // change slice in list of certs
        if (!(certI + n < 0 || certI + n >= certs.length)) {
            // changes the slice of the certs list only if its in bounds
            setCertI(certI + n);
        }
    }

    const handleMouseUp = () => {
        // apply slice change of certs to the DOM
        setShownCerts(listCerts.slice(certI, certI+3));
    }

    return (
        <div className="flex h-[100vh] w-full items-center">
            <div onMouseDown={() => handleMouseDown(-3)} onMouseUp={() => handleMouseUp()}>
                <MoreCerts>&lt;</MoreCerts>
            </div>
            <div className="flex gap-4 h-4/5">{shownCerts}</div>
            <div onMouseDown={() => handleMouseDown(3)} onMouseUp={() => handleMouseUp()}>
                <MoreCerts>&gt;</MoreCerts>
            </div>
            <div className="flex-shrink-1 w-1/2 h-[80%] flex justify-center items-end">
                <h2 className="w-full text-left font-PublicSans text-gray-700 text-5xl">Coming from an Technical High School, I know my stuff. Here are my <span className="display: inline-block relative text-5xl font-bold">certications<div className="w-full h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-green-300 rounded-md"></div></span>.</h2>
            </div>
        </div>
    );
}

export default CertList;