function H2X(props) {
    var pattern = props.children;

    const newList = props.match.map((item) => {
        var before = pattern.split(item)[0];

        pattern = pattern.split(before + item)[0];

        return before, <span>{item}</span>
    })

    return <h2>{newList}</h2>
}

export default H2X;

