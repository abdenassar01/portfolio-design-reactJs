import styled from "styled-components";
import { primaryColors, neutral } from "../../utils";

export const Illistration = styled.img`
    width: 400px;
`

export const HomeWrapper = styled.div`
   
`

export const ParagraphWrapper = styled.div`
    
`

export const Span = styled.span`
    color: ${primaryColors[200]};
`

export const ItemWrapper =  styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`

export const IdeBanner = styled.div`
    height: 20px;
    position: fixed;
    padding-top: 2px;
    bottom: 0;
    width: 100%;
    color: ${neutral[200]};
    background-color:  ${neutral[600]};
    display: flex;
    justify-content: space-between;
`

export const Right = styled.div`
    margin-left: 10px;
`

export const Left = styled.div`
    display: flex;
    justify-content: space-between
`