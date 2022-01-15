import styled from "styled-components";
import { neutral } from '../../utils';


export const FistPage = styled.div`
    Display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ParagraphWrapper = styled.div`
    background-color: ${ neutral[300] };
    background-color: #b4b4b4;
    box-shadow: 1px 0px 5px ${ neutral[300]};
    border-radius: 20px;
    height: 200px;
    width: 500px;
    Display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0px 20px;  
`
 
export const ReachMe = styled.div`
    margin-top: 50px;
    text-align: center;
`

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const SocialMedia = styled.div`
    margin-top: 10px;
`

export const ProfileImg = styled.img`
    height: 500px;
    border-radius: 20px 0 200px 0px; 
    box-shadow: 1px 0px 5px ${ neutral[300]};

`

export const SecondPage = styled.div`

`