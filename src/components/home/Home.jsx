import illistration from '../../assets/illistrations/dev-main.png'
import branch from '../../assets/icons/branch.png'
import react from '../../assets/icons/react.png'
import { PrimaryButton, SecondaryButton } from '../../utils'

import { 
    Illistration,  HomeWrapper, Span, 
    ParagraphWrapper, ItemWrapper , IdeBanner ,
    Right, Left, Icon, IdeTopBar
    } from './StyledComponents';

import { H1, Paragraph } from '../../utils'

const Home = () => {
    return (
        <HomeWrapper>
            <IdeTopBar>
                hello Bitches
            </IdeTopBar>
            <ItemWrapper>
                <ParagraphWrapper>
                    <H1 bold large>Hello, World!</H1>   
                    <H1 bold large>My name is <Span>"Abde Nassar";</Span></H1>   
                    <H1 bold large>I<Span>\'</Span>m a FullStuck developer<Span>;</Span></H1>
                    <PrimaryButton>Hire Me</PrimaryButton>
                    <SecondaryButton>About Me</SecondaryButton>
                </ParagraphWrapper>    
                <Illistration src={illistration} alt="main icon" />
            </ItemWrapper>
            <IdeBanner>
                <Right>
                    <Icon src={branch} alt="git branch" />
                    <Paragraph color="#696969">master</Paragraph>
                </Right>
                <Left>
                    <Paragraph 
                        color="#bdb9b9"
                    >
                            Ln25,Col58 &nbsp;
                    </Paragraph>
                    <Paragraph color="#bdb9b9">Spaces:4 &nbsp;</Paragraph>
                    <Paragraph color="#bdb9b9">UTF-8 &nbsp;</Paragraph>
                    <Paragraph color="#bdb9b9">Prettier &nbsp;</Paragraph>
                    <Icon src={react} alt="git branch" />
                    <Paragraph color="#bdb9b9"  bold>React &nbsp;</Paragraph>
                </Left>
            </IdeBanner>
        </HomeWrapper>
    )
}

export default Home