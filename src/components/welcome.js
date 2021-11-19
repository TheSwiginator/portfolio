const Welcome = (props) => {
    return (
        <div className="w-full flex justify-center items-center font-PublicSans text-9xl">{props.children}</div>
    );
}

export default Welcome;