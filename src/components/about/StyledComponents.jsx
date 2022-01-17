import styled from "styled-components";
import { neutral, Icon, primaryColors } from '../../utils';


export const FistPage = styled.div`
    Display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
`

export const ParagraphWrapper = styled.div`
    background-color: ${ neutral[300] };
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

export const LinkIcon = styled(Icon)`
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    
    &:hover{
        transform: scale(1.3);
        border: 2px solid ${primaryColors[100]};
    }
`

export const ProfileImg = styled.img`
    height: 500px;
    border-radius: 20px 0 200px 0px; 
    box-shadow: 1px 0px 5px ${ neutral[300]};
`
export const ScrollArrow = styled.div`
    width: 5px;
    height: 15px;
    background-color: ${ primaryColors[100] };
    position: absolute;
    bottom: -40px;
    transform: rotate(-50deg);
    animation: bounce 1.5s infinite; 

    &::after{
        content: "";
        width: 5px;
        height: 15px;
        transform: rotate(95deg);  
        background-color: ${ primaryColors[100] };
        position: absolute;
        bottom: -5px;  
        left: 5px;
    }

    @keyframes bounce {
       from{
        bottom: -50px; 
       } 
       30%{
        bottom: -30px 
       }
       70%{
        bottom: -40px
       }
       to{
        bottom: -20px; 
       }
    }
` 
export const SecondPage = styled.div`
    padding-top: 100px;
`

export const ServecesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     /* border: 1px solid #d8d8d8;  */
`

export const Items = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    padding-top: 50px;
    padding-bottom: 50px;
`

export const ServiceCard = styled.li`
    width: 250px;
    height: 200px;
    border-radius: 10px;
    list-style-type: none;
    background-color: ${ neutral[300] };
    box-shadow: 1px 0px 5px ${ neutral[300]};

    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content: center;

    position: relative;
`

export const  ServiceIcon = styled(Icon)`
    position: absolute;
    top: -25px;
    left: 100px
`