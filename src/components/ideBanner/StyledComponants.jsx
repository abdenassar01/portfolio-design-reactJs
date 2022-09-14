import styled from "styled-components";
import { neutral } from '../../utils';

export const IdeBanner = styled.div`
    height: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    position: fixed;
    bottom: 0;
    width: 100%;
    color: ${neutral[200]};
    background-color: ${ props => props.theme.mainColor };
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
        display: none;
    }
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