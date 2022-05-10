import { React , useState , useEffect } from 'react';

function ImageSpread(props) {

    const listImages = props.images.map(img => <img className='h-full w-auto' src={img} alt="img" />);

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds(seconds + 1 % listImages.length);
          console.log(seconds)
        }, 1000);
    
        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <div className='relative w-[550px] h-[200px] border-2 border-slate-700 p-3 '>
            <div className='w-auto h-full border-2 border-green-300'>
                {listImages[0]}
            </div>
            
        </div>
    );
}

export default ImageSpread;