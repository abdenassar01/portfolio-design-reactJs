import { SideBarWrapper, Profile, MainIcon, LinksWrapper, RouterLink } from './StyledComponents'
import icon from '../../assets/icons/me.png'
import { H5, CopyrightText } from '../../utils'

const SideBar = () => {
    return (
        <SideBarWrapper>
            <Profile>
                <MainIcon src={icon} alt="abde nassar" />
                <H5 bold color="white">AbdeNassar</H5>
            </Profile>
            <LinksWrapper>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/projects">Projects</RouterLink>
                <RouterLink to="/contact">Contact</RouterLink>
            </LinksWrapper>
            <CopyrightText style={{ position: "absolute" , bottom: "5px"}}>copyright by Abde Nassar &copy;</CopyrightText>
        </SideBarWrapper>
    )
}

export default SideBar
