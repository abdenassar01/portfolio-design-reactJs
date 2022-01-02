import { Wrapper, StyledLink } from './StyledComponents';
import { Icon, Paragraph, neutral } from '../../utils';
import home from '../../assets/icons/home.png';
import about from '../../assets/icons/about.png';
import contact from '../../assets/icons/contact.png';
import projects from '../../assets/icons/projects.png';


const Navbar = () => {
    return (
        <Wrapper>
            <StyledLink to="/">
                <Icon width="15px" src={home} alt="react" margin="10px"/>
                <Paragraph color={neutral[100]} bold>Home</Paragraph>
            </StyledLink>
             <StyledLink to="/about" >
                <Icon width="15px" src={about} alt="react" margin="10px"/>
                <Paragraph color={neutral[100]} bold>About</Paragraph>
            </StyledLink>
            <StyledLink to="/projects">
                <Icon width="15px" src={projects} alt="react" margin="10px"/>
                <Paragraph color={neutral[100]} bold>Projects</Paragraph>
            </StyledLink>
            <StyledLink to="/contact">
                <Icon width="15px" src={contact} alt="react" margin="10px"/>
                <Paragraph color={neutral[100]} bold>ContactUs</Paragraph>
            </StyledLink>
        </Wrapper>
    )
}

export default Navbar
