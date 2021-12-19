import illistration from '../../assets/illistrations/dev-main.png'
import { 
    Illistration,  HomeWrapper, Span, 
    ParagraphWrapper, ItemWrapper , IdeBanner ,
    Right, Left
    } from './StyledComponents';
import { H1, Paragraph } from '../../utils'

const Home = () => {
    return (
        <HomeWrapper>
            <ItemWrapper>
                <ParagraphWrapper>
                    <H1>Hello, World! </H1>   
                    <H1>My name is <Span>"Abde Nassar";</Span></H1>   
                    <H1>I<Span>\'</Span>m a FullStuck developer<Span>;</Span></H1>
                </ParagraphWrapper>    
                <Illistration src={illistration} alt="main icon" />
            </ItemWrapper>
            <IdeBanner>
                <Right>
                    <Paragraph color="#bdb9b9">master</Paragraph>
                </Right>
                <Left>
                    <Paragraph color="#bdb9b9">Ln25,Col58 &nbsp;</Paragraph>
                    <Paragraph color="#bdb9b9">Spaces:4 &nbsp;</Paragraph>
                    <Paragraph color="#bdb9b9">UTF-8 &nbsp;</Paragraph>
                    <Paragraph color="#bdb9b9">Prettier &nbsp;</Paragraph>
                    <Paragraph color="#bdb9b9">{"{}react"} &nbsp;</Paragraph>
                </Left>
            </IdeBanner>
        </HomeWrapper>
    )
}

export default Home