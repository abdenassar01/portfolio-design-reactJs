import { Routes, Route } from "react-router-dom";
import {  GlobalStyle } from "./utils";

import Navbar from "./components/navbar/Navbar";
import BottomBanner from "./components/ideBanner/BottomBanner";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Error from "./components/error/Error";
import { dark, light } from "./utils";
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from 'react';
    
const App = () => {
 
    const [ theme, setTheme ] = useState("light")
	
	useEffect(() => {alert("This website is under maintenance Now")}, [])
    
	const ToggleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    return (
        <ThemeProvider theme={theme === "light" ? light : dark}  >
            <Navbar onToggle={ToggleTheme} />
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/Projects" element={<Projects />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/*" element={<Error />}/>
            </Routes>
            <BottomBanner />
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App

