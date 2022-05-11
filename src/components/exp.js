import SECTION_DATA from './content/json/exp-data.json';
import H2X from './h2x';
import CAL_ICON from './content/images/calendar-icon.svg';
import LOC_ICON from './content/images/location-icon.svg';
import ETHS_PHOTO_1 from './content/images/eths-photo1.png';
import ETHS_PHOTO_2 from './content/images/eths-photo2.png';
import ETHS_PHOTO_3 from './content/images/skills-slide3.jpg';
import ImageSpread from './image-spread';

const WrappedHeader = () => {
    return (
        <>
            <H2X
            textClassName="font-PublicSans font-bold text-[1.8rem] leading-[35px] text-slate-700"
            matchClassName="font-PublicSans font-bold text-[1.8rem] leading-[35px] text-slate-700"
            keywords={["Essex North Shore Agricultural and"]} >Essex North Shore Agricultural and</H2X>
            <H2X
            textClassName="font-PublicSans font-bold text-[1.8rem] leading-[35px] text-slate-700"
            matchClassName="font-PublicSans font-bold text-[1.8rem] leading-[35px] text-slate-700"
            keywords={["Technical School"]} >Technical School</H2X>
        </>
    );
}

function DefaultHeader({ name }) {
    return (
        <H2X
        textClassName="font-PublicSans font-bold text-[1.8rem] leading-[35px] text-slate-700"
        matchClassName="font-PublicSans font-bold text-[1.8rem] leading-[35px] text-slate-700"
        keywords={[name]} >{name}</H2X>
    );
}

function DefaultSkillsList({ skills }) {
    const listSkills = skills.map(skill => <li>{skill}</li>);

    return (
        <div className='flex flex-row items-start p-0 static w-full h-auto'>
            <ul className=' static w-full h-auto m-0 p-0 font-PublicSans font-light text-[0.9rem] text-slate-700'>{listSkills}</ul>
        </div>
    );
}

function DefaultQuote({ text , citation }) {
    return (
        <div className='flex flex-row items-start gap-2 p-0 static w-full h-auto'>
            <div className='static w-auto h-full font-PublicSans font-semibold text-[4rem] leading-[75px] flex items-center justify-center text-slate-200'>"</div>
            <div className='static w-[450px] h-auto'>
                <div className='static w-full h-auto font-PublicSans font-light text-[0.9rem] leading-[16px] text-slate-700'>{text}</div>
                <div className='static w-full h-auto font-normal text-[0.5rem] leading-[9px] underline italic text-slate-400'>{citation}</div>
            </div>
                
            <div className='static w-auto h-full font-PublicSans font-semibold text-[4rem] leading-[75px] flex items-center justify-center text-slate-200'>"</div>
        </div>
    );
}

function DefaultButton({ text , href }) {
    return (
        <a href={href}>
            <div  className='flex flex-row justify-center items-center pt-[10px] pb-[10px] pr-[20px] pl-[20px] static w-auto h-auto border-[1px] border-slate-300 box-border leading-[23px] font-PTSansNarrow font-normal text-[1.12rem] text-slate-700 no-underline'>
                {text}
            </div>
        </a>
    );
}

function SectionTopic(props) {
    const listTags = props.tags.map(tag => <div className='font-PublicSans font-extralight text-[0.75rem] leading-[16px] flex items-center text-center underline text-slate-400'>{tag}</div>);
    
    const content = (props.skills.length > 1) ? <DefaultSkillsList skills={props.skills} /> : <DefaultQuote text={props.skills[0]} citation={props.citation} />;

    const listLinks = props.links.map(link => <DefaultButton text={link.text} href={link.href} />);

    return (
        <div className='flex flex-col items-center static w-[550px] h-auto'>
            <div className='flex flex-col items-center pt-0 pl-[10px] pr-[10px] pb-[10px] static w-full  box-border border-2 border-slate-100'>
                <div className='flex flex-row justify-center items-center pl-[43px] pr-[43px] pt-0 pb-[12px] static w-auto h-[12px]'>
                    <div className='flex flex-row gap-[5px] justify-center items-center pl-[10px] pr-[10px] w-auto h-auto bg-white'>
                        <div className='w-[3px] h-[3px] rounded-full bg-slate-200'></div>
                        <div className='static w-auto h-auto font-PublicSans font-light text-[0.65rem] leading-[12px] text-center text-slate-200'>{props.label}</div>
                        <div className='w-[3px] h-[3px] rounded-full bg-slate-200'></div>
                    </div>
                </div>
                <div className='w-full h-auto items-start flex flex-col pb-[10px] static'>
                    <div className='flex flex-row gap-[5px] w-full h-auto p-0 mb-[8px] items-start'>{listTags}</div>
                    {content}
                </div>
                <div className='flex flex-row items-start p-0 static w-full h-auto'>{listLinks}</div>
            </div>
        </div>
    );
}

function Section(props) {
    const listTopics = props.items.map(item => <SectionTopic {...item} />);

    const thisHeader = (props.title === "Essex North Shore Agricultural and Technical School") ? <WrappedHeader /> : <DefaultHeader name={props.title} />;

    return (
        <div className='w-auto h-auto flex flex-row'>
            <div className='w-auto h-auto flex flex-col items-start p-[10px] relative gap-[10px] bg-white'>
                {thisHeader}
                <div className='font-PublicSans font-light text-[1.3rem] leading-[24px] text-slate-600 static w-auto h-[24px] left-2 top-[2px] pt-[2px] pb-[2px]'>{props.subtitle}</div>
                <div className='flex flex-row items-center pt-[4px] pb-[4px] static gap-[10px] w-full h-auto left-0 top-[120px]'>
                    <img className='w-[15px] h-[19px] static' src={LOC_ICON} alt="Location" />
                    <div className='static h-auto left-[23px] top-[9.5px] font-PublicSans font-light text-[0.563rem] leading-0 flex items-center text-slate-400'>{props.location}</div>
                    <div className='static w-[3.2px] h-[3px] bg-slate-600 rounded-full'></div>
                    <div className='flex-grow flex flex-row gap-[10px] items-center p-0 static h-auto'>
                        <img className='static left-[0%] right-[95.97%] top-[0%] bottom-[0%]' src={CAL_ICON} alt="Calendar" />
                        <div className='static font-PublicSans font-light text-[0.563rem] leading-[11px] flex items-center text-slate-400'>{props.dateStart}</div>
                        <div className='flex-grow h-[1px] static bg-slate-400 rounded-full'></div>
                        <img className='static left-[0%] right-[95.97%] top-[0%] bottom-[0%]' src={CAL_ICON} alt="Calendar" />
                        <div className='static font-PublicSans font-light text-[0.563rem] leading-[11px] flex items-center text-slate-400'>{props.dateEnd}</div>
                    </div>
                </div>
                <div className='static w-full h-auto flex flex-col gap-[20px]'>{listTopics}</div>
            </div>
            <div className='grid grid-cols-3 w-auto'></div>
        </div>
        
    );
}



function ExpList(props) {
    const listSections = SECTION_DATA.map(section => <Section {...section} />)

    return (
        <div className='w-full h-auto flex justify-center'>
            <div className='grid grid-cols-1 w-[550px] lg:grid-cols-2 lg:w-auto'>{listSections}</div>
        </div>
    );
}

export default ExpList;