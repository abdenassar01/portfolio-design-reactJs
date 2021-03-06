import styled from "styled-components";
import { primaryColors } from "../../utils";

export const Illistration = styled.img`
    width: clamp(300px, 50%, 500px);
    filter: drop-shadow(5px 5px 50px ${ props => props.theme.shadow });
`

export const HomeWrapper = styled.div`
   width: inherit;
   display: grid;
   place-items: center;
   Padding: 15vh 0;
   overflow: hidden;
`

export const ParagraphWrapper = styled.div`
`

export const BtnWrapper = styled.div`
    margin-top: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: .7fr  .7fr;
    gap: 20px;
`

export const Span = styled.span`
    color: ${ props => props.color? props.color : primaryColors[100] };
`

export const ItemWrapper =  styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;

   
`