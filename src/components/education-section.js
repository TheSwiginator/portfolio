import Parallax from "./parallax";
import primaryWave from './images/wave-primary.svg';
import secondaryWave from './images/wave-secondary.svg';
import tertiaryWave from './images/wave-tertiary.svg';

function EducationSection() {
    return (
        <><Parallax top={-1200} z={0.4}>
            <div className="w-full">
              <img className="relative w-full" src={tertiaryWave} alt="wave" />
              <div style={{backgroundColor: "#EFF6FF"}} className="relative w-full h-[200px]"></div>
            </div>
            
        </Parallax>
        <Parallax top={-600} z={0.2}>
            <div className="w-full">
                <img className="relative w-full" src={secondaryWave} alt="wave" />
                <div style={{backgroundColor: "#BFDBFE"}} className="relative w-full h-[200px]"></div>
            </div>
        </Parallax>
        <Parallax top={100} z={0}>
            <div className="w-full">
                <img className="relative w-full h-auto" src={primaryWave} alt="wave" />
                <div className="w-full h-[100vh] bg-blue-300"></div>
            </div> 
        </Parallax></>
    );
}

export default EducationSection;