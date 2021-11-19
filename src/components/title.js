const Title = (props) => {
    return (
        <div className="w-auto">
            <h1 className=" font-PublicSans text-9xl font-semibold text-right w-full text-gray-700">{props.children}</h1>
            <div className="w-auto h-4 rounded-md shadow-lg bg-gradient-to-r from-blue-500 via-blue-300 to-green-300"></div>
        </div>
    );
}

export default Title;