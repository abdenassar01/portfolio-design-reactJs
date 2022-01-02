import { Routes, Route } from "react-router-dom";
import {  GlobalStyle } from "./utils";

import Navbar from "./components/navbar/Navbar";
import BottomBanner from "./components/ideBanner/BottomBanner";
import Home from "./components/home/Home";
import About from "./components/about/About";
    
const App = () => {
 
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
            <BottomBanner />
            <GlobalStyle />
        </>
    )
}

export default App

