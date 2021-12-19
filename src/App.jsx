import React from "react";
import { 
    GlobalStyle } from "./utils"

import SideBar from "./components/sidebar/SideBar"
import Home from "./components/home/Home"
    
const App = () => {
 
    return (
        <div>
            <h1>Hello React Ready To build My Portfolio &copy;</h1>
            <SideBar />
            <Home />
          <GlobalStyle />
        </div>
    )
}

export default App