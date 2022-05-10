import { useState } from 'react';

function CubicBez(props) {
    const [pos, setPos] = useState(props.pos);

    const dotStyle0 = {
        bottom: pos[0].y,
        left: pos[0].x
    }

    const dotStyle1 = {
        bottom: pos[1].y,
        left: pos[1].x
    }

    const dotStyle2 = {
        bottom: pos[2].y,
        left: pos[2].x
    }

    const dotStyle3 = {
        bottom: pos[3].y,
        left: pos[3].x
    }

    return (
        <div className="relative w-full h-full">
            <div style={dotStyle0} className="absolute w-4 h-4 rounded-full border-2 border-black bg-blue-400"></div>
            <div style={dotStyle1} className="absolute w-4 h-4 rounded-full border-2 border-black bg-blue-400"></div>
            <div style={dotStyle2} className="absolute w-4 h-4 rounded-full border-2 border-black bg-blue-400"></div>
            <div style={dotStyle3} className="absolute w-4 h-4 rounded-full border-2 border-black bg-blue-400"></div>
        </div>
    );
}

export default CubicBez;