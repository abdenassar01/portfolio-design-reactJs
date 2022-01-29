import styled from "styled-components";
import { Link } from "react-router-dom";
import { primaryColors, neutral, dark } from '../../utils';

export const Wrapper = styled.div`
    background-color:  ${ props => props.theme.mainColor };
    height : 7vh;
    color: ${neutral[100]};
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
`

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    padding: 0 42px;
    height: 100%;
    border-radius: 50px;
    transition: all 0.3s ease-in;

    &:hover{
        transform: scale(0.8);
        background-color: ${ primaryColors[200] }

    }
`

export const ToggleModes = styled.div`
    width: 60px;
    height: 30px;
    border-radius: 50px;
    background-color: ${ props => props.theme.shadow };
    position: absolute;
    right: 20px ;
`

export const Toggle = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    /* border: 1px solid white; */
    background-color: ${ props => props.theme.cardColor };
    margin-left: ${ props => props.theme === dark ? "31px" : "-1px" }; 
    transition: all 0.3s ease-in-out;

`