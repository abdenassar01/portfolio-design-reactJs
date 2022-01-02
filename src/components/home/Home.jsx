import illistration from '../../assets/illistrations/illistration.png'
import { PrimaryButton, SecondaryButton, H1} from '../../utils'

import { 
    Illistration,  HomeWrapper, Span, 
    ParagraphWrapper, ItemWrapper, BtnWrapper
    } from './StyledComponents';


const Home = () => {
    return (
        <HomeWrapper>
            <ItemWrapper>
                <ParagraphWrapper>
                    <H1 bold large>Hello, World!</H1>   
                    <H1 bold large>My name is <Span>"Abde Nassar";</Span></H1>   
                    <H1 bold large>I<Span>\'</Span>m a FullStuck developer<Span>;</Span></H1>
                    <BtnWrapper>
                         <PrimaryButton href="/contact" >Hire Me</PrimaryButton>
                        <SecondaryButton href="/about">About Me</SecondaryButton>
                    </BtnWrapper>
                </ParagraphWrapper>    
                <Illistration src={illistration} alt="main icon" />
            </ItemWrapper>
        </HomeWrapper>
    )
}

export default Home