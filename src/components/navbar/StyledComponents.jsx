import styled from "styled-components";
import { Link } from "react-router-dom";
import { primaryColors, neutral } from '../../utils';

export const Wrapper = styled.div`
    background-color:  ${primaryColors[100]};
    height : 40px;
    color: ${neutral[100]};
    display: flex;
    justify-content: start;
    align-items: center;
`

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    padding: 0 42px;
    height: 100%;

    &:hover{
        border-bottom: 3px solid ${primaryColors[400]};
        background-color: rgba(0, 0, 0, 0.2);

    }
`