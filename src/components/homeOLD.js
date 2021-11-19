const Home = () => {
    return (
      <div className="relative mt-10 md:mt-[30vh] w-full h-auto flex gap-4 justify-start flex-col items-center md:items-start md:flex-row md:justify-between lg:justify-end">
        <div className="absolute left-[750px] top-[100px] w-10 h-10 flex justify-center items-center">
            <div className="profile-btn w-4/5 h-4/5 bg-gray-200 shadow-lg rounded-full hover:w-full hover:h-full transition-all"></div>
        </div>
        <div className="absolute left-[450px] top-[100px] profile">
            <ProfileCard />
        </div>
        <SectionDeck />
      </div>
    );
};

export default Home;