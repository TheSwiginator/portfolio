// React dependencies
import { useState } from "react";
import { Outlet } from "react-router-dom";

// Imported components
import Home from "./routes/home";
import { NavigationList } from "./components/navigation/navigation-list";
import ScrollNav from "./components/navigation/scroll-navigation";

function App() {

  return (
  <div>
    <ScrollNav />
    <Outlet />
  </div>
  );
};

export default App;