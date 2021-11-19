import Parallax from "../parallax";
import primaryWaveETHS from '../content/images/wave-primary.svg';
import secondaryWaveETHS from '../content/images/wave-secondary.svg';
import tertiaryWaveETHS from '../content/images/wave-tertiary.svg';
import primaryWaveUMB from '../content/images/wave2-primary.svg';
import secondaryWaveUMB from '../content/images/wave2-secondary.svg';
import tertiaryWaveUMB from '../content/images/wave2-tertiary.svg';
import { PreviousMap } from "postcss";

const ETHS = <>
            <Parallax top={-1200} z={0.4}>
                <div className="w-full">
                    <img className="relative w-full z-[5]" src={tertiaryWaveETHS} alt="wave" />
                    <div className="relative w-full h-[200px] bg-blue-100 z-[5]"></div>
                </div>
            </Parallax>
            <Parallax top={-600} z={0.2}>
                <div className="w-full">
                    <img className="relative w-full z-[6]" src={secondaryWaveETHS} alt="wave" />
                    <div className="relative w-full h-[200px] bg-blue-200 z-[6]"></div>
                </div>
            </Parallax>
            <Parallax top={100} z={0}>
                <div className="w-full">
                    <img className="relative w-full h-auto z-[7]" src={primaryWaveETHS} alt="wave" />
                    <div className="relative w-full h-[200vh] bg-blue-300 z-[7] flex items-center"></div>
                </div> 
            </Parallax>
            </>;

const UMB = <>
            <Parallax top={-1600} z={0.4}>
                <div className="w-full">
                <img className="relative w-full z-[8]" src={tertiaryWaveUMB} alt="wave" />
                <div className="relative w-full h-[200px] bg-green-100 z-[8]"></div>
                </div>

            </Parallax>
            <Parallax top={-800} z={0.2}>
                <div className="w-full">
                    <img className="relative w-full z-[9]" src={secondaryWaveUMB} alt="wave" />
                    <div className="relative w-full h-[200px] bg-green-200 z-[9]"></div>
                </div>
            </Parallax>
            <Parallax top={100} z={0}>
                <div className="w-full">
                    <img className="relative w-full h-auto z-[10]" src={primaryWaveUMB} alt="wave" />
                    <div className="w-full h-full bg-green-300 z-[10]"></div>
                </div> 
            </Parallax>
            </>;

function EducationSection({ name }) {
    if (name === "eths") {
        return ETHS;
    } else if (name === "umb") {
        return UMB;
    }
}

export default EducationSection;