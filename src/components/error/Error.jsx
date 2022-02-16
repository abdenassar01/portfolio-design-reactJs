import styled from "styled-components";
import { Link } from "react-router-dom";
import { Text } from "../../utils";
import ErrIllistration from "../../assets/illistrations/oops.png"

const Error = () => {
  return (
        <Wrapper>
            <ErrModal>
                <Text size="clamp(1.5rem, 50%, 3.5rem)" bold color="white">😧Ooops! Something Went Wrong...</Text>
                <Text size="clamp(.8rem, 50%, 1rem)" color="white"><i>Sorry we can't seem to find the page you're looking for 🚨</i>
                    <Text size="1rem" bold color="#e1fa00">404</Text>
                </Text>
                <Grooper>
                    <Illistration src={ ErrIllistration } rel="Err Img" />
                    <StyledLink color="#00ff88" to="/" >Go back To Savety</StyledLink>
                </Grooper>   
            </ErrModal>
        </Wrapper>
  );
};


export default Error;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
`
const ErrModal = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: ${ props => props.theme.mainColor };
    box-shadow: 5px 5px 100px rgba(0, 0, 0, 0.4);
    font-weight: 900;
    gap: 30px;
    width: clamp(300px, 50%, 700px );
    padding: 10px;
    border-radius: 10px;
`

const Illistration = styled.img`
    height: 300px;
`

const Grooper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

const StyledLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    padding: 7px 32px;
    height: 100%;
    border-radius: 50px;
    transition: all 0.3s ease-in;
    background-color: ${props => props.color && props.color };
    border: 1px solid ${props => props.color && props.color };
    color: #1974a8;

    &:hover{
        background-color: transparent;
        color:  ${props => props.color && props.color };
    }
`