import PhotoA from '../content/images/eths-photo1.png';
import PhotoB from '../content/images/eths-photo2.png';
import PhotoC from '../content/images/eths-photo3.png';

function ETHS() {
    return (
        <div className="w-full h-[100vh] top-[100px] z-[8] flex">
            <div className="flex-grow h-full">

            </div>
            <div className="w-[900px] h-full flex items-center">
                <div style={{backgroundImage: "url("+PhotoC+")", borderRadius: "5%" }} className="absolute ml-[40vh] h-[45vh] w-[45vh] shadow-md" />
                <div style={{backgroundImage: "url("+PhotoB+")", borderRadius: "5%" }} className="absolute ml-[20vh] h-[55vh] w-[55vh] shadow-md" />
                <div style={{backgroundImage: "url("+PhotoA+")", borderRadius: "5%" }} className="absolute h-[60vh] w-[60vh] shadow-md " />
            </div>
            
        </div>
    );
}

export default ETHS;