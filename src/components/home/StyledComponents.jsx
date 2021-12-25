import styled from "styled-components";
import { primaryColors, neutral } from "../../utils";

export const Illistration = styled.img`
    width: 500px;
    padding-top: 100px;
`

export const HomeWrapper = styled.div`
   width: 85%;
   margin-left: 15%;
`

export const ParagraphWrapper = styled.div`
   font-family: 'Pushster', cursive;
`

export const Span = styled.span`
    color: ${primaryColors[100]};
`

export const ItemWrapper =  styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
`

export const IdeTopBar = styled.div`
    height: 40px;
    position: fixed;
    top: 0;
    width: 85%;
    color: ${neutral[200]};
    background-color:  ${neutral[600]};
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const IdeBanner = styled.div`
    height: 20px;
    position: fixed;
    bottom: 0;
    width: 85%;
    color: ${neutral[200]};
    background-color:  ${neutral[600]};
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