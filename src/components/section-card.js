import actIcon from "./images/accounts-icon.svg";

//

const SectionCard = (props) => {
    return (
        <div className="relative backdrop-filter backdrop-blur-md w-44 h-52 bg-gray-100 rounded-lg shadow-sm flex flex-col items-center">
            <div className="w-full h-[8px] rounded-t-lg bg-gradient-to-r from-blue-500 via-blue-300 to-green-300"></div>
            <img className="h-1/3 w-auto mt-4 filter grayscale brightness-75" src={props.icon} alt="about-me-icon" />
            <h2 className="w-full font-PublicSans text-sm text-gray-500 font-bold text-center">{props.title}</h2>
            <p className="w-full font-PublicSans text-xs text-gray-500 font-thin p-2 text-center">{props.desc}</p>
            <LearnMoreButton link="#" />
        </div>
    );
}

const LearnMoreButton = (props) => {
    return (
        <a href={props.link} className="absolute bottom-2 w-1/2 h-8 rounded-md shadow-sm bg-blue-500 font-PublicSans text-xs text-gray-300 flex justify-center items-center">Learn More</a>
    );
}

const SectionDeck = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-4 w-120 h-80 gap-4 items-end justify-start md:items-stretch md:justify-end">
            <SectionCard title="About Me" desc="Find out more about me and my passion for technology" icon={actIcon}/>
            <SectionCard title="Experience" desc="Check out some of my latest projects" icon={actIcon}/>
            <SectionCard title="Academics" desc="See how my time at Essex Tech has prepared me for success" icon={actIcon}/>
            <SectionCard title="Certifications" desc="Valuable proficiencies in technology" icon={actIcon}/>
        </div>
    );
}

export default SectionDeck;