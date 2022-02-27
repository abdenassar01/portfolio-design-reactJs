import { withTheme } from 'styled-components'

import { Wrapper, StyledLink , ToggleModes, Toggle} from './StyledComponents';
import { Icon, Paragraph } from '../../utils';
import sun from '../../assets/icons/sun.png';
import { useState } from 'react';
import { useEffect } from 'react';
// import home from '../../assets/icons/home.png';
// import about from '../../assets/icons/about.png';
// import contact from '../../assets/icons/contact.png';
// import projects from '../../assets/icons/projects.png';


const Navbar = (props) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if(window.innerWidth <= 400){
            setIsMobile(true);
        }
    }, [])
    

    return (
        <Wrapper>
            <StyledLink to="/"  isMobile={isMobile}>
                {/* <Icon width="15px" src={home} alt="react" margin="10px"/> */}
                <Paragraph color={"white"} bold>Home</Paragraph>
            </StyledLink>
            <StyledLink to="/about"  isMobile={isMobile}>
                {/* <Icon width="15px" src={about} alt="react" margin="10px"/> */}
                <Paragraph color={"white"} bold>About</Paragraph>
            </StyledLink >
            <StyledLink to="/projects"  isMobile={isMobile}>
                {/* <Icon width="15px" src={projects} alt="react" margin="10px"/> */}
                <Paragraph color={"white"} bold>Projects</Paragraph>
            </StyledLink>
            <StyledLink to="/contact"  isMobile={isMobile}>
                {/* <Icon width="15px" src={contact} alt="react" margin="10px"/> */}
                <Paragraph color={"white"} bold>ContactUs</Paragraph>
            </StyledLink>
            <ToggleModes>
                <Toggle onClick={ props.onToggle } >
                    {props.theme.shadow === "#cdcdcd" && <Icon width="20px" src={sun} alt="react"/> }         
                </Toggle>
            </ToggleModes>
        </Wrapper>
    )                      
}

export default withTheme(Navbar);
