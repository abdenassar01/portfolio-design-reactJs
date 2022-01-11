import React from 'react'

import { HelperText } from '../../utils';
import { Wrapper, ParagraphWrapper , Curve, ProfileImg} from './StyledComponents'


import profileImage from '../../assets/imgs/profile.jpg'

const About = () => {
    return (
        <Wrapper>
            <ParagraphWrapper>
                <HelperText>
                    Hey, My Name is ABDENASSAR AMIMI, and I'm a 20 years old moroccain web developer.
                    I started my learning juerney Two years a go.
                    I have Learned a lot of stuff during this juerney, including Web Development (Front-end and back-end)
                    <br /> No I'm Working with React framework for the front-end and Spring Boot framework for the backend
                </HelperText>   
            </ParagraphWrapper>
            {/* <Curve> */}
            <ProfileImg src={profileImage} />
            {/* </Curve>  */}
        </Wrapper>
    )
}

export default About
