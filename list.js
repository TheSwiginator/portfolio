function ULX({ title ,  items }) {
    const listItems = items.map(item => {
        return <li className="font-PublicSans text-base text-gray-700">{item}</li>
    });

    return (
        <div>
            <p className="font-PublicSans text-base text-blue-500 mt-4">{title}</p>
            <div className="grid relative">
                <ul className="ml-2">
                    {listItems}
                </ul>
                <div className="w-[2px] rounded-full h-full bg-gray-300 absolute left-0"></div>
            </div>
        </div>
    );
};

export default ULX;