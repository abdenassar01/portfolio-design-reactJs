import styled from "styled-components";
import { primaryColors } from "../../utils"


export const ProjectsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
    
    &:hover{
        background-color: transparent;
        color: ${primaryColors[200]}
    }

`

export const ProjectCard = styled.li`
    width: 20%;
    min-width: 350px;
    height: 400px;
    border-radius: 5px;
    display: flex;
    gap: 30px;
    flex-direction: column;
    background-color: ${ props => props.theme.cardColor };
    box-shadow:
        9.9px 11px 1px -11px rgba(0, 0, 0, 0.044),
        27.7px 31px 11.3px -11px rgba(0, 0, 0, 0.066),
        99px 111px 80px -11px rgba(0, 0, 0, 0.11)
        ;
    overflow-y: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

`

export const Image = styled.img`
width: 100%;
    border-radius: 5px;
    transition: hover .3s ease-in;
    object-fit: contain;

    &:hover{
        transform: scale(1.08);
        border-radius: 5px;
    }
`

export const Text = styled.p`
    padding-left: 10px;
    color: ${props => props.theme.fontColor}; 

` 

export const BiTextg = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    padding-top: 2rem;
    color: ${ props => props.theme.fontColor === "#000000" ?  props.theme.mainColor : props.theme.fontColor };
`

export const Button = styled.a`
    padding: 5px 30px;
    text-decoration: none;
    background-color:  white;
    border: 1px solid white;
    border-radius: 50px;
    font-family: 'jetBraines Mono', monospace;
    font-weight: bold;
    cursor: pointer;
    transform: all .3s ease-in-out;
    color: ${primaryColors[100]};

    &:hover{
        background-color: transparent;
        border: 1px solid white;
        color: white;
    }

`

export const Btns = styled.div`   
    display: flex;
    gap: 20px;
    justify-content: center;
`