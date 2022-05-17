// React dependencies
import { useState } from "react";

// Imported components
import HomeLegacy from "./home-legacy";
import Home from "./home";




function App() {
  const [pageIndex, setPageIndex] = useState('Legacy');

  const pages = {
    'Legacy': <HomeLegacy pageIndex={[pageIndex, setPageIndex]} />, 
    'About': <Home pageIndex={[pageIndex, setPageIndex]} />,
  };

  return pages[pageIndex]
};

export default App;