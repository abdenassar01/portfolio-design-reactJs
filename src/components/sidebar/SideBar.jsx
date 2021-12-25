import { SideBarWrapper, Profile, MainIcon,LinkWrapper, LinksWrapper, RouterLink, Icon } from './StyledComponents';
import icon from '../../assets/icons/me.png'
import home from '../../assets/icons/home.png'
import projects from '../../assets/icons/projects.png'
import contact from '../../assets/icons/contact.png'
import about from '../../assets/icons/about.png'
import { H5, CopyrightText } from '../../utils'

const SideBar = () => {
    return (
        <SideBarWrapper>
            <Profile>
                <MainIcon src={icon} alt="abde nassar" />
                <H5 bold color="white">AbdeNassar</H5>
            </Profile>
            <LinksWrapper>
                <LinkWrapper>
                    <Icon src={home} alt="" />
                    <RouterLink to="/">Home</RouterLink>
                </LinkWrapper>
                <LinkWrapper>
                    <Icon src={about} alt="" />  
                    <RouterLink to="/about">About</RouterLink>
                </LinkWrapper>
                <LinkWrapper>
                    <Icon src={projects} alt="" />  
                    <RouterLink to="/projects">Projects</RouterLink>
                </LinkWrapper>
                <LinkWrapper>
                    <Icon src={contact} alt="" />
                    <RouterLink to="/contact">Contact</RouterLink>
                </LinkWrapper>    
            </LinksWrapper>
            <CopyrightText style={{ position: "absolute" , bottom: "5px"}}>copyright by Abde Nassar &copy;</CopyrightText>
        </SideBarWrapper>
    )
}

export default SideBar
