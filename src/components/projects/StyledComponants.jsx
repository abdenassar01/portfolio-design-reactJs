import styled from "styled-components";

export const ProjectsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    padding-top: 50px;
    padding-bottom: 50px;

    
`

export const ProjectCard = styled.li`
    width: 45%;
    min-width: 600px;
    height: 200px;
    border-radius: 20px;
    padding: 20px; 
    display: flex;
    background-color: ${ props => props.theme.cardColor };
    box-shadow:  20px 20px 60px ${ props => props.theme.shadow },
                0px 0px 0px ${ props => props.theme.shadow }; 
`

export const Image = styled.img`
    width: 250px;
    border-radius: 20px;
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
    color: ${props => props.theme.fontColor};
`

export const Button = styled.a`
    
`