import styled from "styled-components";
import { primaryColors } from "../../utils";

export const Illistration = styled.img`
    width: 500px;
    padding-top: 50px;
`

export const HomeWrapper = styled.div`
   width: 100%;
`

export const ParagraphWrapper = styled.div`
    
`

export const BtnWrapper = styled.div`
    margin-top: 20px;
    width: 70%;
    display: flex;
    justify-content: space-between;

`

export const Span = styled.span`
    color: ${ props => props.color? props.color : primaryColors[100] };
`

export const ItemWrapper =  styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
`