// Imported Stylesheets
import '../index.css'

// Imported Components
import CertList from "../components/cert"
import ExpList from "../components/exp"
import Music from "../components/music/music"
import Repos from "../components/repos/repos"
import SplashScreen from "../components/splash-screen.js"

// Imported Page Data (json, png, svg, etc...)
import certData from '../components/content/json/certification-data.json'
import expData from '../components/content/json/exp-data.json'

export default function Home() {

    return (
        <div className="w-full h-auto overflow-x-hidden">
            <SplashScreen />
            <CertList certs={certData}/>
            <ExpList sections={expData}/>
            <Music />
            <Repos />
        </div>
    );
    
}