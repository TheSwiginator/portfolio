import Parallax from "../parallax";
import primaryWaveETHS from '../content/images/wave-primary.svg';
import secondaryWaveETHS from '../content/images/wave-secondary.svg';
import tertiaryWaveETHS from '../content/images/wave-tertiary.svg';
import primaryWaveUMB from '../content/images/wave2-primary.svg';
import secondaryWaveUMB from '../content/images/wave2-secondary.svg';
import tertiaryWaveUMB from '../content/images/wave2-tertiary.svg';
import ETHS from "./education-eths";
import UMB from "./education-umb";

const ETHS_SECTION = <>
            <Parallax top={-1200} z={0.4}>
                <div className="w-full">
                    <img className="relative w-full z-[5] drop-shadow-lg" src={tertiaryWaveETHS} alt="wave" />
                    <div className="relative w-full h-[200px] bg-blue-50 z-[5]"></div>
                </div>
            </Parallax>
            <Parallax top={-600} z={0.2}>
                <div className="w-full">
                    <img className="relative w-full z-[6] drop-shadow-lg" src={secondaryWaveETHS} alt="wave" />
                    <div className="relative w-full h-[200px] bg-blue-200 z-[6]"></div>
                </div>
            </Parallax>
            <Parallax top={100} z={0}>
                <div className="w-full">
                    <img className="relative w-full h-auto z-[7] drop-shadow-2xl" src={primaryWaveETHS} alt="wave" />
                    <div className="relative w-full h-[200vh] bg-blue-300 z-[7]">
                        <ETHS />
                    </div>
                </div> 
            </Parallax>
            </>;

const UMB_SECTION = <>
            <Parallax top={-1700} z={0.4}>
                <div className="w-full">
                <img className="relative w-full z-[8] drop-shadow-2xl" src={tertiaryWaveUMB} alt="wave" />
                <div className="relative w-full h-[200px] bg-green-50 z-[8]"></div>
                </div>

            </Parallax>
            <Parallax top={-700} z={0.2}>
                <div className="w-full">
                    <img className="relative w-full z-[9] drop-shadow-2xl" src={secondaryWaveUMB} alt="wave" />
                    <div className="relative w-full h-[200px] bg-green-200 z-[9]"></div>
                </div>
            </Parallax>
            <Parallax top={300} z={0}>
                <div className="w-full">
                    <img className="relative w-full h-auto z-[10] drop-shadow-2xl" src={primaryWaveUMB} alt="wave" />
                    <div className="relative w-full h-[100vh] bg-green-300 z-[10]">
                        <UMB />
                    </div>
                </div> 
            </Parallax>
            </>;

function EducationSection({ name }) {
    if (name === "eths") {
        return ETHS_SECTION;
    } else if (name === "umb") {
        return UMB_SECTION;
    }
}

export default EducationSection;