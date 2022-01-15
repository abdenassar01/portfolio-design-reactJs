import { HelperText, H3, Icon } from '../../utils';
import { FistPage, ParagraphWrapper , ReachMe, LeftSide, SecondPage, ProfileImg, SocialMedia} from './StyledComponents'

import facebook from '../../assets/icons/facebook.png';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import instagram from '../../assets/icons/instagram.png';
import dribbble from '../../assets/icons/dribbble.png';
import fiver from '../../assets/icons/fiver.svg';
import profileImage from '../../assets/imgs/profile.jpg'

const About = () => {
    return (
        <>
            <FistPage>
                <LeftSide>
                    <ParagraphWrapper>
                        <HelperText>
                            Hey, My Name is ABDENASSAR AMIMI, and I'm a 20 years old moroccain web developer.
                            I started my learning juerney Two years a go.
                            I have Learned a lot of stuff during this period. including Web Development (Front-end and back-end)
                            <br /> No I'm Working with React framework for the front-end and Spring Boot framework for the backend
                        </HelperText>
                        
                    </ParagraphWrapper>
                    <ReachMe>
                        <H3 color="#096d9b">You can Reach me at</H3>
                        <SocialMedia>
                            <a target="_blank" href="https://www.facebook.com/abdenassar01"><Icon src={facebook} alt="facebook"  margin="10px" width="30px"/></a>
                            <a target="_blank" href="https://www.linkedin.com/abdenassar01"><Icon src={linkedin} alt="linkedin"  margin="10px" width="30px"/></a>
                            <a target="_blank" href="https://www.github.com/abdenassar01"><Icon src={github} alt="github"  margin="10px" width="30px"/></a>
                            <a target="_blank" href="https://www.instagram.com/abdenassar01"><Icon src={instagram} alt="instagram"  margin="10px" width="30px"/></a>
                            <a target="_blank" href="https://www.dribbble.com/abdenassar01"><Icon src={dribbble} alt="dribbble"  margin="10px" width="30px"/></a>
                            <a target="_blank" href="https://www.fiverr.com/abdenassar01"><Icon src={fiver} alt="fiverr"  margin="10px" width="30px"/></a>
                        </SocialMedia>
                    </ReachMe>
                </LeftSide>
                <ProfileImg src={profileImage} />
            </FistPage>
            <SecondPage>
               The SecondPage I well complete it tomorrow
            </SecondPage>  
        </>
        
    )
}

export default About
