import profile from './content/images/profile.png';
import linkedinIcon from './content/images/linkedin.svg';

const Link = (props) => {
    return (
        // eslint-disable-next-line
        <a href={props.href} target="_blank" className="w-10 h-10 ml-2 mr-2 bg-blue-100 flex items-center justify-center rounded-full shadow-sm">
            <img className="w-2/3 h-auto" src={props.icon} alt={props.icon} />
        </a>
    );
}

const ProfileLinks = (props) => {
    return (
        <div className="absolute flex flex-wrap items-center justify-center w-full pb-4 bottom-0">
            <Link href="https://github.com/TheSwiginator" icon="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
            <Link href="https://www.linkedin.com/in/blake-moody-2626ba11b/" icon={linkedinIcon} />
            <Link href="https://www.instagram.com/iisblake/" icon="https://www.svgrepo.com/show/30539/instagram-logo.svg" />
        </div>
    );
}

/* Color Palette
    1: #3B82F6 (blue-500)
    2: #93C5FD (blue-300)
    3: #6EE7B7 (green-300)
    4: #F3F4F6 (gray-100)

*/

const ProfileCard = (props) => {
    return (
        <div className="relative sm:left-0 w-60 h-80 bg-gray-100 shadow-lg rounded-lg">
            <div className="w-full h-1/3 rounded-t-lg bg-gradient-to-r from-blue-500 via-blue-300 to-green-300"></div>
            <img className="w-20 h-auto rounded-full border-4 border-white mt-[-2.5em] ml-5" src={profile} alt="profile-pic" />
            <h2 className="font-PublicSans leading-8 text-gray-900 text-lg text-left pl-5">Blake Moody</h2>
            <p className="font-PublicSans leading-4 text-gray-500 text-sm text-left pl-5">Developer | Tech Guy</p>
            <p className="font-PublicSans leading-4 italic text-gray-500 text-sm text-left pl-5">Blake092202@gmail.com</p>
            <ProfileLinks />
        </div>
    );
}

export default ProfileCard;