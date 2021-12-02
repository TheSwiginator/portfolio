function H2X(props) {
    
    return <h2 style={props.style} className={props.className}>{props.children.split(props.match)[0]}<span className="display: inline-block relative text-5xl font-bold">{props.match}<div className="w-full h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-green-300 rounded-md"></div></span>{props.children.split(props.match)[1]}</h2>
}

export default H2X;

