import { IdeBanner, Right, Left, Icon } from './StyledComponants';
import { Paragraph, neutral } from '../../utils';
import branch from '../../assets/icons/branch.png'
import react from '../../assets/icons/react.png'

const BottomBanner = () => {
    return (
        <IdeBanner>
            <Right>
                <Icon src={branch} alt="git branch" />
                <Paragraph color={neutral[100]}>master</Paragraph>
            </Right>
            <Left>
                <Paragraph 
                color={neutral[100]}
                >
                Ln25,Col58 &nbsp;
                </Paragraph>
                <Paragraph color={neutral[100]}>Spaces:4 &nbsp;</Paragraph>
                <Paragraph color={neutral[100]}>UTF-8 &nbsp;</Paragraph>
                <Paragraph color={neutral[100]}>Prettier &nbsp;</Paragraph>
                <Icon src={react} alt="git branch" />
                <Paragraph color={neutral[100]}  bold>React &nbsp;</Paragraph>
            </Left>
        </IdeBanner>
    )
}

export default BottomBanner
