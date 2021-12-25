import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import {  GlobalStyle } from "./utils"

import SideBar from "./components/sidebar/SideBar"
import Home from "./components/home/Home"
import About from "./components/about/About"
    
const App = () => {
 
    return (
        <Wrapper>
            <SideBar/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
          <GlobalStyle />
        </Wrapper>
    )
}

export default App

const Wrapper = styled.div`
    display: flex;
`
