import { Routes, Route } from "react-router-dom";
import {  GlobalStyle } from "./utils";

import Navbar from "./components/navbar/Navbar";
import BottomBanner from "./components/ideBanner/BottomBanner";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

    
const App = () => {
 
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/Projects" element={<Projects />}/>
                <Route path="/contact" element={<Contact />}/>
                {/* <Route path="/*" element={<Error />}/> */}
            </Routes>
            <BottomBanner />
            <GlobalStyle />
        </>
    )
}

export default App

