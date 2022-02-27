import { HelperText, H3, H1, Paragraph, primaryColors } from '../../utils';
import {    
    FistPage, ParagraphWrapper , 
    ReachMe, LeftSide, SecondPage, LinkIcon,
    ProfileImg, SocialMedia, ServecesWrapper, ScrollArrow,
    Items, ServiceCard, ServiceIcon, ProfileWrapper, ScrollArrowWrapper,
        } from './StyledComponents';

import { services }  from './services';

import facebook from '../../assets/icons/facebook.png';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import instagram from '../../assets/icons/instagram.png';
import dribbble from '../../assets/icons/dribbble.png';
import fiver from '../../assets/icons/fiver.svg';
import profileImage from '../../assets/imgs/profile.png';

const About = () => {
    return (
        <>
            <FistPage>
                <LeftSide>
                    <ParagraphWrapper>
                        <HelperText>
                            Hey, My Name is ABDENASSAR AMIMI 🙎, and I'm a 20 years old moroccain web developer💻.
                            I started my learning juerney Two years a go ⏳.
                            I have Learned a lot of stuff during this period. <br/>including Web Development(Front-end 🎨 and back-end 🗃)
                            <br /> Now I'm Working with React framework ⚛ for the front-end and Spring Boot framework for the backend 🥬.
                        </HelperText> 
                    </ParagraphWrapper>
                    <ReachMe>
                        <H3 color={primaryColors[100]}>You can Reach me at</H3>
                        <SocialMedia>
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/abdenassar01"><LinkIcon src={facebook} alt="facebook"  margin="10px" width="30px"/></a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/abdenassar01"><LinkIcon src={linkedin} alt="linkedin"  margin="10px" width="30px"/></a>
                            <a target="_blank" rel="noreferrer" href="https://www.github.com/abdenassar01"><LinkIcon src={github} alt="github"  margin="10px" width="30px"/></a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/abdenassar01"><LinkIcon src={instagram} alt="instagram"  margin="10px" width="30px"/></a>
                            <a target="_blank" rel="noreferrer" href="https://www.dribbble.com/abdenassar01"><LinkIcon src={dribbble} alt="dribbble"  margin="10px" width="30px"/></a>
                            <a target="_blank" rel="noreferrer" href="https://www.fiverr.com/abdenassar01"><LinkIcon src={fiver} alt="fiverr"  margin="10px" width="30px"/></a>
                        </SocialMedia>
                    </ReachMe>
                </LeftSide>
                <ProfileWrapper>
                    <ProfileImg src={profileImage} />
                </ProfileWrapper>
                <ScrollArrowWrapper 
                    onClick={ 
                        () =>{
                            window.scrollTo(0,600)
                        }}>
                      <ScrollArrow />
                </ScrollArrowWrapper>
            </FistPage>
            <SecondPage>
                <ServecesWrapper>
                    <H1 color={primaryColors[100]} bold>What I'm Offering</H1>
                    <Items>
                        { services.map(service =>
                                <ServiceCard key={service.id}>
                                    <ServiceIcon width="50px" src={service.icon} />
                                    <H3 bold color={primaryColors[100]}>{service.title}</H3><br />
                                    <Paragraph>{service.text}</Paragraph>
                                </ServiceCard>
                            )}    
                    </Items>
                </ServecesWrapper> 
            </SecondPage>  
      </>
        
    )
}

export default About
