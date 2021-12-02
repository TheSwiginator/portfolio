import H2X from "./h2x";

function Resume(props) {


    return (
        <div className="relative flex w-full h-[50vh] justify-end gap-[25px] mt-[-50px]">
            
            <div className="flex-shrink-1 w-[650px] h-full flex justify-center items-start">
                <H2X className="w-full text-right font-PublicSans text-gray-700 text-5xl" match="resume">I have a lot to share. Here is my resume.</H2X>
            </div>
            <div className="w-[650px] h-full flex pr-[200px]">
                <div className="flex-shrink-1 w-full h-[150%] bg-gray-50 rounded-lg shadow-lg border-2 border-gray-200 flex pt-4 pl-4 pb-4">
                    <iframe className="overflow-hidden" width="100%" src="https://docs.google.com/document/d/1PtKuo5IGLh8UrHJesRx07TjkbyHx-_CXoe_kDvOfBHc/preview?pli=1"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Resume;