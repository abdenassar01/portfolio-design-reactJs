import styled from "styled-components";
import { neutral, primaryColors } from '../../utils';

export const IdeBanner = styled.div`
    height: 3vh;
    position: fixed;
    bottom: 0;
    width: 100%;
    color: ${neutral[200]};
    background-color: ${ props => props.theme.mainColor };
    display: flex;
    justify-content: space-between;
`

export const Right = styled.div`
    margin-left: 10px;
    display: flex;
    justify-content: space-around;
`

export const Left = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
`

export const Icon = styled.img`
    width: 15px;
`