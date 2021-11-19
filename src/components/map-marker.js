const MapMarker = (props) => {
    const markerStyle = {
        top: props.y,
        right: props.x,
    }

    const miniStyle = {
        backgroundColor: props.color,
    }

    return (
        <div style={markerStyle} className="map-marker absolute w-8 h-16 flex flex-col items-center hover:top-[30px] hover:scale-105 transition-all">
            <div style={miniStyle} className="w-full h-1/2 rounded-full flex justify-center items-center shadow-lg">
                <div className="w-1/2 h-1/2 bg-white rounded-full"></div>
            </div>
            <div style={miniStyle} className="absolute bottom-4 w-1/4 h-1/3 rounded-b-full shadow-lg"></div>
            <span className="absolute top-[-30px] text-center font-PublicSans text-base text-gray-700">{props.city}</span>
        </div>
    );
}

export default MapMarker;