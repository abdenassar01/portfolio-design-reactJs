import styled from "styled-components";
import { SecondaryButton, primaryColors } from "../../utils";

export const Modal = styled.div`
    height: 90vh;
    position: relative;
    display: flex;
`

export const Wrapper = styled.div`
    width: 500px;
    background-color: ${ props => props.theme.backColor};
   box-shadow:
        9.9px 11px 1px -11px rgba(0, 0, 0, 0.044),
        27.7px 31px 11.3px -11px rgba(0, 0, 0, 0.066),
        99px 111px 80px -11px rgba(0, 0, 0, 0.11)
        ;
    border-radius: 5px;
    border: 1px solid ${ primaryColors[100] };
    position: absolute;
    bottom: 7%;
    top: 7%;
    padding: 50px;
    right: 5%;
    min-height: 85%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    object-fit: contain;
`

export const Item = styled.div`
    padding: 5px;
    border: 1px solid ${ primaryColors[100] };
    border-radius: 5px;
    background-color: transparent ;
    box-shadow:
        9.9px 11px 1px -11px rgba(0, 0, 0, 0.044),
        27.7px 31px 11.3px -11px rgba(0, 0, 0, 0.066),
        99px 111px 80px -11px rgba(0, 0, 0, 0.11)
        ;
`

export const Input = styled.input`
    padding: 10px;
    width: 100%;
    border: none;
    border: 1px solid transparent;
    color: ${ props => props.theme.fontColor };
    border-radius: 10px;
    background-color: transparent;
    -moz-appearance: textfield;

    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button{ 
        -webkit-appearance: none;
    }

    &:focus{
        outline: none;
        border: 1px solid ${ primaryColors[100] };
        background-color: transparent;
    }
`

export const Textarea = styled.textarea`
    padding: 10px;
    width: 100%;
    border: 1px solid transparent;
    background-color: transparent;
    resize: none;
    color: ${ props => props.theme.fontColor };

    &:focus{
        outline: none;
        background-color: transparent;
        border: 1px solid ${ primaryColors[100] };
    }
`

export const Label  = styled.label`
    font-size: 12px;
    color: ${primaryColors[100]};
    /* display: none; */

`

export const StyledSecondaryButton = styled(SecondaryButton)`

    margin-bottom: 50px;
`