// React Dependencies
import { useState } from "react"

// Imported stylesheets
import './index.js'

// Imported Components
import CertList from "./components/cert"
import ExpList from "./components/exp"
import Music from "./components/music"
import Repos from "./components/repos"
import ScrollNav from "./components/scroll-navigation"
import SplashScreen from "./components/splash-screen.js"

// Imported Page Data (json, png, svg, etc...)
import certData from './components/content/json/certification-data.json'
import expData from './components/content/json/exp-data.json'
import navData from './components/content/json/navigation-data.json'

export default function Home({ pageIndex }) {
    console.log(pageIndex);

    return (
        <div className="w-full h-auto overflow-x-hidden">
            <SplashScreen />
            <ScrollNav btns={navData} pageIndex={ pageIndex } />
            <CertList certs={certData}/>
            <ExpList sections={expData}/>
            <Music />
            <Repos />
        </div>
    );
    
}