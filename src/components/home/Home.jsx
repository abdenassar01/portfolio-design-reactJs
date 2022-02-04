import illistration from '../../assets/illistrations/illistration.png'
import { PrimaryButton, SecondaryButton, H1} from '../../utils'

import { withTheme } from 'styled-components'

import { 
    Illistration,  HomeWrapper, Span, 
    ParagraphWrapper, ItemWrapper, BtnWrapper
    } from './StyledComponents';


const Home = (props) => {
    return (
        <HomeWrapper>
            <ItemWrapper>
                <ParagraphWrapper>
                    <H1 bold large>Have an <Span color="#46A66F">idea</Span> in mind<Span color="#46A66F">?</Span></H1>
                    <H1 bold large><Span color="#46A66F">Let's</Span> make it <Span color="#46A66F" >Happen </Span> </H1>
                    <BtnWrapper>
                        <PrimaryButton to="/contact" >Hire Me</PrimaryButton>
                        <SecondaryButton to="/about">About Me</SecondaryButton>
                    </BtnWrapper>
                </ParagraphWrapper>    
                <Illistration src={illistration} alt="main icon" />
            </ItemWrapper>
        </HomeWrapper>
    )
}

export default withTheme(Home)