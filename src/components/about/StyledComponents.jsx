import styled from "styled-components";
import { Icon, primaryColors } from '../../utils';


export const FistPage = styled.div`
    Display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
`

export const ParagraphWrapper = styled.div`
    background-color: ${ props => props.theme.cardColor };
    border-radius: 20px;
    height: 200px;
    width: 500px;
    Display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0px 20px;
    box-shadow:  20px 20px 60px ${ props => props.theme.shadow },
                -20px -20px 60px ${ props => props.theme.shadow };


    @media (max-width: 768px) {
        height: 150px;
        width: 30px;
        
    }             
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
        border: 2px solid ${primaryColors[200]};
    }
`


export const ProfileWrapper = styled.div`
    height: 500px;
    width: fit-content;
    border-radius: 0px 0 200px 0px;
    background-color: ${ props => props.theme.cardColor };

    @media (max-width: 768px) {
        height: 350px;
    }

`

export const ProfileImg = styled.img`
    height: 500px;
    border-radius: 0px 0 200px 0px;
    box-shadow:  20px 20px 60px ${ props => props.theme.shadow },
                0px 0px 0px ${ props => props.theme.shadow };

    @media (max-width: 768px) {
        height: 350px;
    }
`

export const ScrollArrowWrapper = styled.div`
    width: 200px;
    height: 100px;
    position: absolute;
    bottom: 0px;
    display: grid;
    place-items: center;
    animation: bounce 1.5s infinite;

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
export const ScrollArrow = styled.div`
    width: 5px;
    height: 15px;
    background-color: ${ primaryColors[100] };
    transform: rotate(-50deg);

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


`
export const SecondPage = styled.div`
    padding-top: 100px;
`

export const ServecesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Items = styled.ul`
    display: flex;
    width: 100%;
    gap: 20px 5px;
    justify-content: space-evenly;
    padding: 100px 0;
    flex-wrap: wrap;
`

export const ServiceCard = styled.li`
    width: 250px;
    height: 200px;
    padding: 10px;
    border-radius: 10px;
    list-style-type: none;
    background-color: ${ props => props.theme.cardColor };
    box-shadow:  20px 20px 60px ${ props => props.theme.shadow },
                -20px -20px 60px ${ props => props.theme.shadow };

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