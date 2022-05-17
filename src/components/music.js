import { useEffect , useState , useRef, useCallback, forwardRef } from 'react';
import SpotifyAPI from './spotify-api';
import { NavigationList , NavigationListItem } from './navigation-list';

import CAL_ICON from './content/images/calendar-icon.svg';
import HEADPHONES_ICON from './content/images/headphones-icon.svg';
import ARROW_ICON from './content/images/arrow.svg';
import SPOTIFY_ICON from './content/images/spotify.svg';

const Track = forwardRef(({targetIndex , index , trackUrl , trackName , trackLength , artistName , artistImg , albumImg , albumName , isExplicit }, ref) => {
    const [el, setEl] = useState(0);

    const [vis, setVis] = useState(0);

    const explicitIcon = <div className='w-[15px] h-[15px] font-PublicSans bg-slate-300 font-semibold flex items-center justify-center text-center text-[10px] text-white box-border pr-[1px] rounded-[3px]'>E</div>;

    useEffect(() => {
        setVis(1);
    }, []);

    var style = {
        opacity: vis,
        transition: `opacity .5s ease ${index * 0.1}s, transform .5s ease`,
    }

    return (
        <div ref={ref} onClick={() => el.parentNode.animate({scrollLeft: el.offsetLeft - 100}, 300)} style={style} className='opacity-0 flex flex-col flex-grow items-start p-0 relative w-[353px] h-auto rounded-[10px] overflow-clip transition-all'>
            <div style={{backgroundImage:`url(${albumImg.url})`, backgroundSize: "100% auto"}} className='w-full flex flex-col items-start p-0 flex-grow h-[209px] rounded-b-[10px]'></div>
            <div className='flex flex-col justify-between items-start pl-[10px] pt-[10px] pr-[10px] pb-[15px] h-[209px] w-full bg-white  rounded-b-[10px]'>
                <div className='flex flex-col items-start p-0 w-full h-auto gap-[5px]'>
                    <div className='flex flex-row justify-between items-start p-0 w-full h-auto gap-[10px]'>
                        <div className='flex flex-row items-start p-0 gap-[5px]'>
                            <span className='font-PublicSans font-normal text-[30px] leading-[100.5%] flex items-end capitalize text-slate-700'>{trackName}</span>
                            <div className='w-auto h-full pt-[5px]'>{isExplicit ? explicitIcon : null}</div>
                        </div>
                        <div className='flex flex-row justify-center items-center pl-[10px] pr-[10px] w-auto h-[30px] border-[1px] border-slate-300 rounded-[3px]'>
                            <span className='w-auto h-[15px] font-PublicSans font-thin text-[15px] leading-[100.5%] text-slate-700'>{trackLength}</span>
                        </div>
                    </div>
                    <div className='flex flex-row items-center pl-0.5 gap-[10px]'>
                        <img className='w-auto h-[22px] rounded-full' src={artistImg.url} alt={artistName} />
                        <span className='font-PublicSans font-semibold font-[14px] leading-[16px] flex items-center text-slate-300'>{artistName}</span>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-end p-0 w-full h-auto'>
                    <div className='font-PublicSans text-[3rem] text-slate-200 leading-[3rem] font-semibold'>
                        {`#${index + 1}`}
                    </div>
                    <a className="w-auto h-auto hover:opacity-50 transition-all" href={trackUrl} target="_blank">
                        <div className='w-[52px] h-[52px] relative' href={trackUrl}>
                            <div className='w-full h-full flex justify-end items-end '>
                                <div className='w-auto h-auto border-[1px] border-white z-50 rounded-full shadow-[1px_1px_2px_0px_rgba(0,0,0,0.25)]'>
                                    <img className='w-[17px] h-[17px]' src={SPOTIFY_ICON} alt="Spotify Logo" />
                                </div>
                            </div>
                            <div className='absolute w-full h-full left-0 top-0 bg-slate-50 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] rounded-full flex items-center justify-center z-30'>
                                <img className='w-[20px] h-auto' src={ARROW_ICON} alt='go to song' />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
});


function MSToTime(ms) {
    const totalSecond = Math.floor(ms / 1000);
    const second = totalSecond % 60;
    const minute = Math.floor(totalSecond / 60);

    const time = second > 9 ? minute + ":" + second : minute + ":" + "0" + second;

    return time;
}


function waitForPause(ms, callback) {
    var timer;

    return function() {
        var self = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
            callback.apply(self, args);
        }, ms);
    };
}


function LoadingList(props) {
    return (
        <div className='w-full h-[462px] flex flex-row-reverse items-end justify-start relative'>
            <div className='absolute w-full h-full grid grid-cols-4 gap-4'>
                <div className='relative loading-item-anim-1 flex items-end justify-center'>
                    <div className='w-full h-[430px] bg-slate-50 rounded-md'></div>
                </div>
                <div className='relative loading-item-anim-2 flex items-end justify-center'>
                    <div className='w-full h-[430px] bg-slate-50 rounded-md'></div>
                </div>
                <div className='relative loading-item-anim-3 flex items-end justify-center'>
                    <div className='w-full h-[430px] bg-slate-50 rounded-md'></div>
                </div>
                <div className='relative loading-item-anim-4 flex items-end justify-center'>
                    <div className='w-full h-[430px] bg-slate-50 rounded-md'></div>
                </div>
            </div> 
            <div className='loading-icon-anim opacity-50'>
                <div className='loading-icon-anim-circle-1'></div>
                <div className='loading-icon-anim-circle-2'></div>
                <div className='loading-icon-anim-circle-3'></div>
            </div>
        </div>
    );
}



function Music(props) {
    /* Featured Playlists: */

    // Japanese Pop : https://open.spotify.com/playlist/507x2hWyz5BRc8RAGm8KaZ?si=4f58ef32db264630
    // Rap / Hip-hop : https://open.spotify.com/playlist/69Q0S8mIJl8giJAf6PZAS1?si=3c3bc9a8ae114cf5
    // Electronic / Dance : https://open.spotify.com/playlist/7kut0kf3lZdVqU9YCJVFOZ?si=17a5300de5f84f5d
    // Indie / Alternative Rock : https://open.spotify.com/playlist/7gyU14Jr3oiptWZPoEXPyA?si=53877b92004943dd

    const [instance, setInstance] = useState(new SpotifyAPI("72778884d3724237b5835faad9b8cdc0", "1db7e62d308d43efbdca41f1d4b376e3"));
    const [index, setIndex] = useState(0);
    const [trackList, setTrackList] = useState(null);
    const [playlistNames, setPlaylistNames] = useState(null);
    const itemsRef = useRef([]);
    const [scroll, setScroll] = useState(0);

    const Parsed = props => {
    
        useEffect(() => {
           itemsRef.current = itemsRef.current.slice(0, props.items.length);
        }, [props.items]);
    
        return props.items.map((item, i) => (
            <Track ref={el => {itemsRef.current[i] = el; return el}} key={i} targetIndex={i} {...item} />
        ));
    }

    const playlists = [
        {id:'507x2hWyz5BRc8RAGm8KaZ', name:'loading..'}, 
        {id:'69Q0S8mIJl8giJAf6PZAS1', name:'loading..'}, 
        {id:'7kut0kf3lZdVqU9YCJVFOZ', name:'loading..'}, 
        {id:'7gyU14Jr3oiptWZPoEXPyA', name:'loading..'}
    ];

    

    async function parsePlaylistSongs(id) {
        let songs = [];

        let playlist = await instance.getPlaylist(id);
        for (var item of playlist.items) {
            let artist = await instance.getArtist(item.track.artists[0].id);

            songs.push({
                index: songs.length,
                trackUrl: item.track.external_urls.spotify,
                trackName: item.track.name.length <= 40 ? item.track.name : item.track.name.slice(0, 40)+"...",
                trackLength: MSToTime(item.track.duration_ms),
                artistName: artist.name,
                artistImg: artist.images[0],
                albumName: item.track.album.name,
                albumImg: item.track.album.images[0],
                isExplicit: item.track.explicit,
            });
        }

        return await Promise.all(songs);
    }

    async function getPlaylistNames() {
        const navButtonList = playlists.map(async (playlist, index) => {
            const response = await instance.getPlaylistInfo(playlist.id).then(data => data);
            return <NavigationListItem onClick={() => getTrackList(playlist.id)}>{response.name}</NavigationListItem>
        })

        return await Promise.all(navButtonList)
    }
    

    async function getTrackList(id=playlists[index].id) {
        setTrackList(null);
        const items = await parsePlaylistSongs(id).then(data => data);
        setTrackList(<Parsed items={items} />);
    }

    

    useEffect(() => {
        getPlaylistNames().then(data => setPlaylistNames(data));

        if (!trackList) {
            getTrackList().finally(() => {
                const getTrackListInterval = setInterval(() => {
                    if (!trackList) {
                        getTrackList();
                    }
                }, 600000);
            })
        }

        
    }, [])
    
    function isInBounds(item, padding=0) {
        const child = item.getBoundingClientRect();
        const parent = item.parentElement.getBoundingClientRect();
        const diffLeft = child.x - parent.x;
        const diffRight = (parent.x + parent.width) - (child.x + child.width);
        return diffLeft > padding && diffRight > padding
    }

    function handleScroll(e) {
        const bounds = itemsRef.current.map(item => {
            if (isInBounds(item, -200)) {
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                item.style.opacity = 1;
                item.style.transform = `translateY(0)`;
            } else {
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                item.style.opacity = 0;
                item.style.transform = `translateY(50px)`;
            }
            return item
        });
        if (e.target.scrollLeft == 0) {
            // handle max left scroll
            const el = document.getElementById('scroll-left');
            const shadow = document.getElementById('scroll-left-shadow');
            shadow.style.visibility = 'hidden';
            el.style.transition = 'left 1s ease, opacity 1s ease';
            el.style.left = '-50px';
            el.style.opacity = '0';

        } else {
            // handle NOT max left scroll
            const el = document.getElementById('scroll-left');
            const shadow = document.getElementById('scroll-left-shadow');
            shadow.style.visibility = 'visible';
            el.style.transition = 'left 1s ease, opacity 1s ease';
            el.style.left = '20px';
            el.style.opacity = '0.9';
        }
        if (e.target.scrollLeft == e.target.scrollLeftMax) {
            // handle max right scroll
            const el = document.getElementById('scroll-right');
            const shadow = document.getElementById('scroll-right-shadow');
            shadow.style.visibility = 'hidden';
            el.style.transition = 'right 1s ease, opacity 1s ease';
            el.style.right = '-50px';
            el.style.opacity = '0';
            
        } else {
            // handle NOT max right scroll
            const el = document.getElementById('scroll-right');
            const shadow = document.getElementById('scroll-right-shadow');
            shadow.style.visibility = 'visible';
            el.style.transition = 'right 1s ease, opacity 1s ease';
            el.style.right = '20px';
            el.style.opacity = '0.9';
        }
    }

    return (
        <div className="flex w-full justify-center h-auto mt-[200px] mb-[200px] p-[10px]">
            <div className="music-content flex flex-col items-center h-full w-full p-0 static flex-grow">
                <div className="music-discover relative h-full w-3/4 flex flex-col items-center p-5 pt-[20px] mt-[50px] border-[2px] border-slate-100">
                    <div className="music-genre-list flex flex-row items-center justify-center mb-[20px] static w-3/4 h-auto">
                        {playlistNames != null ? <NavigationList>{playlistNames}</NavigationList> : 0}{scroll}
                    </div>
                    <div onScroll={(e) => handleScroll(e)} id='music-content-list' className='music-content-list w-full h-auto relative music-list grid grid-flow-col pb-[40px] items-start gap-[30px] overflow-x-scroll overflow-y-hidden rounded-md'>
                            {trackList != null ? trackList : <LoadingList />}
                    </div>
                    <div className='absolute flex flex-row items-center justify-start left-5 top-0 h-full w-5 z-auto bg-gradient-to-r from-white via-transparent to-transparent'>
                        <div id='scroll-left-shadow' className='scroll-button-shadow-left absolute w-[75px] h-[75px] rounded-full  bg-gradient-to-t from-slate-200 via-transparent to-transparent shadow-lg left-5'></div>
                        <div id='scroll-left' className='scroll-button opacity-90 absolute w-[75px] h-[75px] rounded-full bg-white border-white border-1 left-5 flex flex-row items-center justify-center z-auto'>
                            <div className='clip-arrow-left bg-gradient-to-l from-green-500 to-lime-400 w-[25px] h-[15px]'></div>
                        </div>
                    </div>
                    <div className='absolute flex flex-row items-center justify-start right-5 top-0 h-full w-5 z-auto bg-gradient-to-l from-white via-transparent to-transparent'>
                        <div id='scroll-right-shadow' className='scroll-button-shadow absolute w-[75px] h-[75px] rounded-full bg-gradient-to-t from-slate-200 via-transparent to-transparent shadow-lg right-5'></div>
                        <div id='scroll-right' className='scroll-button opacity-90 absolute w-[75px] h-[75px] rounded-full bg-white border-white border-1 right-5 flex flex-row items-center justify-center z-auto'>
                            <div className='clip-arrow-right bg-gradient-to-l from-green-500 to-lime-400 w-[25px] h-[15px] transform'></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Music;