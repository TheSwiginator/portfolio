function ImageX(props) {
    return (
        <div style={{width:props.width, height:props.height, right:props.right, top:props.top}} className="absolute picture z-20">
            <div style={{top:props.captionTop, left:props.captionLeft, alignItems:props.alignItems}} className="w-full h-full absolute border-gray-700 border-[2px] flex">
                <p className="font-PublicSans text-xs text-gray-800 p-2">{props.caption}</p>
            </div>
            <div className="w-full h-full absolute top-0 left-0 picture-bg rounded-[4px] bg-gradient-to-r from-blue-500 via-blue-300 to-green-300"></div>
            <img src={props.src} className="w-full h-full absolute top-0 left-0 picture-item rounded-[4px] hover:shadow-md" alt={props.alt} />
        </div>
    );
}

export default ImageX;