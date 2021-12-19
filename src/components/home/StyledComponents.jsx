import styled from "styled-components";
import { primaryColors, neutral } from "../../utils";

export const Illistration = styled.img`
    width: 500px;
    padding-top: 100px;
`

export const HomeWrapper = styled.div`
   width: 85%;
   overflow: scroll;
`

export const ParagraphWrapper = styled.div`
   font-family: 'Lobster', cursive;
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

export const IdeBanner = styled.div`
    height: 20px;
    position: fixed;
    bottom: 0;
    width: 100%;
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
    margin-right: 200px
`

export const Icon = styled.img`
    width: 15px;
`