import { withTheme } from 'styled-components'

import { Wrapper, StyledLink , ToggleModes, Toggle} from './StyledComponents';
import { Icon, Paragraph } from '../../utils';
import react from '../../assets/icons/react.png';
// import home from '../../assets/icons/home.png';
// import about from '../../assets/icons/about.png';
// import contact from '../../assets/icons/contact.png';
// import projects from '../../assets/icons/projects.png';


const Navbar = (props) => {

    return (
        <Wrapper>
            <StyledLink to="/">
                {/* <Icon width="15px" src={home} alt="react" margin="10px"/> */}
                <Paragraph color={"white"} bold>Home</Paragraph>
            </StyledLink>
             <StyledLink to="/about" >
                {/* <Icon width="15px" src={about} alt="react" margin="10px"/> */}
                <Paragraph color={"white"} bold>About</Paragraph>
            </StyledLink>
            <StyledLink to="/projects">
                {/* <Icon width="15px" src={projects} alt="react" margin="10px"/> */}
                <Paragraph color={"white"} bold>Projects</Paragraph>
            </StyledLink>
            <StyledLink to="/contact">
                {/* <Icon width="15px" src={contact} alt="react" margin="10px"/> */}
                <Paragraph color={"white"} bold>ContactUs</Paragraph>
            </StyledLink>
            <ToggleModes>
                <Toggle onClick={ props.onToggle } >
                    <Icon width="20px" src={react} alt="react" />    
                </Toggle>
            </ToggleModes>
        </Wrapper>
    )
}

export default withTheme(Navbar);
