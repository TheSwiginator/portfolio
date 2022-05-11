

function H2X(props) {
    const match = Object.values(props.keywords);

    var pattern = props.children;
    var before;

    const newList = [];
    

    match.forEach((item, index) => {
        before = pattern.split(item);
        pattern = pattern.split(before[0]+item)[1];

        newList.push(<span className={props.textClassName}>{before[0]}</span>);
        newList.push(<span className={props.matchClassName}>{item}<div className="w-full h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-green-300 rounded-md"></div></span>);
    })

    const footer = props.children.split(match.at(-1))
    newList.push(<span className={props.textClassName}>{footer[1]}</span>);

    

    //console.log(newList);



    return (
        <h2 className={props.textClassName}>{newList}</h2>
    );
}

export default H2X;

